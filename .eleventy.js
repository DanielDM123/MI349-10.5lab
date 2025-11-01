
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("navList", function(one, two, three) {
    return `<ul class="marginbottom">
      <li><a href="/">Home</a></li>
      <li><a href="/wallet/">${one}</a></li>
      <li><a href="/nickel/">${two}</a></li>
      <li><a href="/bottle/">${three}</a></li>
      </ul>
    `
});
};