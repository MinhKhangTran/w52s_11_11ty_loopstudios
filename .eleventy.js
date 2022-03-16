module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");

  eleventyConfig.addShortcode("ext", function (name, link) {
    return `<a class="footer__social" href="${link}" title="${link}" target="_blank" rel="noopener">
              <img src="/images/icon-${name}.svg" alt="${name}"/>
            </a>`;
  });
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
