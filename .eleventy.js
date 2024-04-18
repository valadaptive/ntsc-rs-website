const eleventySass = require('eleventy-sass');
const Image = require("@11ty/eleventy-img");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const apiResponse = fetch('https://api.github.com/repos/valadaptive/ntsc-rs/releases/latest', {
    headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : undefined,
        'X-GitHub-Api-Version': '2022-11-28'
    }
}).then(response => response.json());

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addShortcode("image", async function(src, alt, className = '') {
        let metadata = await Image(src, {
            widths: ["auto"],
            formats: ["svg", "webp"],
            svgShortCircuit: true,
            urlPath: "/assets/images/",
            outputDir: "_site/assets/images/",
        });

        let imageAttributes = {
            alt,
            class: className,
            loading: "lazy",
            decoding: "async"
        };

        return Image.generateHTML(metadata, imageAttributes);
    });

    eleventyConfig.addGlobalData("latestRelease", async function() {
        const release = await apiResponse;
        release.version = release.name.replace('v', '');
        return release
    });

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        }
    };
}
