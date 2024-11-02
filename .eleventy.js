import * as path from 'node:path';
import * as sass from 'sass';
// eslint-disable-next-line no-redeclare
import Image from '@11ty/eleventy-img';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';

console.log(Image, eleventyNavigationPlugin);

const apiResponse = fetch('https://api.github.com/repos/valadaptive/ntsc-rs/releases/latest', {
    headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : undefined,
        'X-GitHub-Api-Version': '2022-11-28'
    }
}).then(response => response.json());

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/robots.txt');

    eleventyConfig.addShortcode('image', async function(src, alt, className = '', style = '') {
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

    eleventyConfig.addGlobalData('latestRelease', async function() {
        const release = await apiResponse;
        release.version = release.name.replace('v', '');
        return release;
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
