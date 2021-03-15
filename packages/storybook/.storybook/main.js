module.exports = {
  webpackFinal: (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    })

    return { ...config }
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/react',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss/register',
    '@storybook/addon-links',
    '@storybook/addon-jest',
    'storybook-addon-designs',
    'storybook-addon-performance/register',
    '@whitespace/storybook-addon-html',
    '@etchteam/storybook-addon-status/register',
  ],
}
