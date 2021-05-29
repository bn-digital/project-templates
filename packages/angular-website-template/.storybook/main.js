module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  core: {
    builder: "webpack5",
  },
  typescript: {
    check: false,
    checkOptions: {},
  },
  addons: ["@storybook/addon-links", "storybook-addon-angular-ivy", "@storybook/addon-essentials"],
};
