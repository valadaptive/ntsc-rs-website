import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import * as sass from 'sass';
import * as cheerio from 'cheerio';
// eslint-disable-next-line no-redeclare
import Image from '@11ty/eleventy-img';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';

// Cache latest release from GitHub to avoid excess API requests
const apiResponse = (async () => {
    const CACHED_RESPONSE_FILE = './release.json';
    const CACHE_VALID_FOR_MINUTES = 15;
    try {
        const stats = await fs.stat(CACHED_RESPONSE_FILE);
        console.log()
        if (Date.now() - stats.mtimeMs < 1000 * 60 * CACHE_VALID_FOR_MINUTES) {
            const contents = await fs.readFile(CACHED_RESPONSE_FILE, 'utf8');
            return JSON.parse(contents);
        }
    } catch (err) {
        // Cached response doesn't exist
    }

    const response = await fetch('https://api.github.com/repos/valadaptive/ntsc-rs/releases/latest', {
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : undefined,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    const json = await response.json();
    await fs.writeFile(CACHED_RESPONSE_FILE, JSON.stringify(json, null, '\t'), 'utf8');
    return json;
})();

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/robots.txt');

    eleventyConfig.addShortcode('image', async function (src, alt, className = '', style = '') {
        const metadata = await Image(src, {
            widths: ['auto'],
            formats: ['svg', 'webp'],
            svgShortCircuit: true,
            urlPath: '/assets/images/',
            outputDir: '_site/assets/images/'
        });

        const imageAttributes = {
            alt,
            class: className,
            loading: 'lazy',
            decoding: 'async',
            style
        };

        return Image.generateHTML(metadata, imageAttributes);
    });

    eleventyConfig.addGlobalData('latestRelease', async function () {
        const release = await apiResponse;
        release.version = release.name.replace('v', '');
        return release;
    });

    eleventyConfig.addGlobalData('releaseArtifacts', async function () {
        const release = await apiResponse;
        const assetData = [];
        for (const os of [{key: 'windows', name: 'Windows'}, {key: 'macos', name: 'MacOS'}, {key: 'linux', name: 'Linux'}]) {
            const dists = [];
            for (const distribution of [
                {key: 'standalone', name: 'Standalone application', docs: '/docs/standalone-installation/'},
                {key: 'openfx', name: 'OpenFX plugin', docs: '/docs/openfx-plugin/'},
                {key: 'afterfx', name: 'After Effects/Premiere plugin', docs: '/docs/after-effects-plugin/'}
            ]) {
                const asset = release.assets.find(asset => asset.name.includes(os.key) && asset.name.includes(distribution.key));
                if (asset) dists.push({key: distribution.key, name: distribution.name, docs: distribution.docs, asset});
            }
            assetData.push({key: os.key, name: os.name, dists});
        }
        return assetData;
    })

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

    eleventyConfig.addCollection('indexablePages', function (collectionsApi) {
        return collectionsApi.getAll().filter(function (item) {
            return item.page.outputFileExtension === 'html';
        })
    });

    eleventyConfig.addTransform('externalify', async function (content) {
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
