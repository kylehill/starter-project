const path = require("path");

module.exports = {
  stories: ["../components/**/stories.@(jsx|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  presets: [path.resolve(__dirname, "./next-preset.js")],
};
