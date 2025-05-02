import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import * as sass from 'sass';
import * as cheerio from 'cheerio';
import * as esbuild from 'esbuild';
import * as pagefind from 'pagefind';
import markdownItAttrs from 'markdown-it-attrs';

import {eleventyImageTransformPlugin} from '@11ty/eleventy-img';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import {RenderPlugin} from '@11ty/eleventy';
import Fetch from '@11ty/eleventy-fetch';
Fetch.concurrency = 1;

// Cache latest release from GitHub to avoid excess API requests
const apiResponse = (async() => {
    const response = await Fetch('https://api.github.com/repos/valadaptive/ntsc-rs/releases/latest', {
        duration: '15m',
        type: 'json',
        fetchOptions: {
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : undefined,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }
    });
    return response;
})();

const renderWhatsNew = async function() {
    const release = await apiResponse;
    const text = release.body
        .replace(/---[\s\n]+\**For installation instructions and further guidance(?:.|\n)+$/, '');
    const requestBody = JSON.stringify({
        text,
        mode: 'gfm',
        context: 'valadaptive/ntsc-rs'
    });

    let html = await Fetch('https://api.github.com/markdown', {
        duration: '15m',
        type: 'text',
        fetchOptions: {
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : undefined,
                'X-GitHub-Api-Version': '2022-11-28'
            },
            method: 'POST',
            body: requestBody
        }
    });

    const attachmentsDir = path.join(import.meta.dirname, '_includes/gh_attachments');
    await fs.mkdir(attachmentsDir, {recursive: true});
    const $ = cheerio.load(html);
    // Fetch the `src` for every `img`, `audio`, `picture`, and `video` element
    const elements = $('img, audio, picture, video');
    const fetches = [];
    for (const element of elements) {
        const src = element.attribs.src;
        const srcUrl = new URL(src, release.html_url);
        const fileName = srcUrl.pathname.split('/').pop();

        fetches.push((async() => {
            // Check if the file already exists
            const filePath = path.join(attachmentsDir, fileName);
            try {
                await fs.access(filePath);
                return;
            } catch {
                const response = await Fetch(src, {duration: '*'});
                await fs.writeFile(path.join(attachmentsDir, fileName), response);
            }
        })());

        element.attribs.src = `/assets/gh_attachments/${fileName}`;
    }

    $('*').attr('dir', null);
    $('*').attr('data-canonical-src', null);
    $('*').attr('data-hovercard-type', null);
    $('*').attr('data-hovercard-url', null);
    $('*').attr('data-error-text', null);
    $('*').attr('data-permission-text', null);

    html = $.html();

    await Promise.all(fetches);

    await fs.writeFile('_includes/whatsnew.html', html, 'utf8');
    return html;
};

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy({'_includes/gh_attachments': 'assets/gh_attachments'});

    eleventyConfig.addPlugin(RenderPlugin);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        widths: ['auto'],
        formats: ['svg', 'webp'],
        svgShortCircuit: true,
        urlPath: '/assets/images/',
        outputDir: '_site/assets/images/',
        htmlOptions: {
            imgAttributes: {
                loading: 'lazy',
                decoding: 'async'
            }
        },
        transformOnRequest: false
    });

    eleventyConfig.amendLibrary('md', mdlib => mdlib.use(markdownItAttrs));

    eleventyConfig.addGlobalData('latestRelease', async function() {
        const release = await apiResponse;
        release.version = release.name.replace('v', '');
        return release;
    });

    eleventyConfig.addGlobalData('releaseArtifacts', async function() {
        const release = await apiResponse;
        const assetData = [];
        for (const os of [
            {key: 'windows', name: 'Windows'},
            {key: 'macos', name: 'MacOS'},
            {key: 'linux', name: 'Linux'}
        ]) {
            const dists = [];
            for (const distribution of [
                {key: 'standalone', name: 'Standalone application', docs: '/docs/standalone-installation/'},
                {key: 'openfx', name: 'OpenFX plugin', docs: '/docs/openfx-plugin/'},
                {key: 'afterfx', name: 'After Effects/Premiere plugin', docs: '/docs/after-effects-plugin/'}
            ]) {
                const asset = release.assets
                    .find(asset => asset.name.includes(os.key) && asset.name.includes(distribution.key));
                if (asset) {
                    dists.push({key: distribution.key, name: distribution.name, docs: distribution.docs, asset});
                }
            }
            assetData.push({key: os.key, name: os.name, dists});
        }
        return assetData;
    });

    eleventyConfig.on('eleventy.before', async function() {
        await renderWhatsNew();
    });

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addTemplateFormats('scss');
    eleventyConfig.addExtension('scss', {
        outputFileExtension: 'css',
        compile(inputContent, inputPath) {
            const parsed = path.parse(inputPath);
            const result = sass.compileString(inputContent, {
                loadPaths: [
                    parsed.dir || '.',
                    this.config.dir.includes
                ]
            });

            this.addDependencies(inputPath, result.loadedUrls);

            return () => result.css;
        }
    });

    eleventyConfig.addCollection('indexablePages', function(collectionsApi) {
        return collectionsApi.getAll().filter(function(item) {
            return item.page.outputFileExtension === 'html';
        });
    });

    eleventyConfig.addTransform('externalify', async function(content) {
        if (this.page.outputFileExtension !== 'html' || !(this.page.outputPath.endsWith('.html'))) {
            return content;
        }
        const $ = cheerio.load(content);
        for (const link of $('a')) {
            if (typeof link.attribs.href === 'string' && link.attribs.href.includes('://') && typeof link.attribs.class === 'undefined') {
                link.attribs.class = 'external-link';
            }
        }
        return $.html();
    });

    eleventyConfig.on('eleventy.after', async function({dir, outputMode, results}) {
        if (outputMode !== 'fs') return;

        const {errors, index} = await pagefind.createIndex();
        if (errors.length > 0) throw new Error(errors.join('\n'));

        for (const result of results) {
            if (result.outputPath.endsWith('.html')) {
                const {errors} = await index.addHTMLFile({url: result.url, content: result.content});
                for (const error of errors) {
                    // eslint-disable-next-line no-console
                    console.warn(error);
                }
            }
        }

        await index.writeFiles({outputPath: path.join(dir.output, 'pagefind')});
        // We don't use these
        await Promise.all([
            fs.unlink(path.join(dir.output, 'pagefind', 'pagefind-ui.js')),
            fs.unlink(path.join(dir.output, 'pagefind', 'pagefind-ui.css')),
            fs.unlink(path.join(dir.output, 'pagefind', 'pagefind-modular-ui.js')),
            fs.unlink(path.join(dir.output, 'pagefind', 'pagefind-modular-ui.css')),
            fs.unlink(path.join(dir.output, 'pagefind', 'pagefind-highlight.js'))
        ]);
        await index.deleteIndex();
    });

    eleventyConfig.addWatchTarget('src/js/');
    eleventyConfig.on('eleventy.after', async function({dir}) {
        await esbuild.build({
            entryPoints: ['src/js/search.tsx'],
            bundle: true,
            splitting: true,
            outdir: path.join(dir.output, 'js'),
            format: 'esm',

            jsx: 'transform',
            jsxFactory: 'h',
            jsxFragment: 'Fragment',
            jsxImportSource: 'preact',

            alias: {
                'pagefind-web': '/pagefind/pagefind.js'
            },
            external: ['/pagefind/pagefind.js'],
            sourcemap: 'linked',
            minify: true
        });
    });

    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            layouts: '_layouts',
            data: '_data'
        }
    };
};
