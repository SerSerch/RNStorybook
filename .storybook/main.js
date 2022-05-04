const path = require("path");

module.exports = {
  stories: [
    '../src/components/Textable/Text.stories.js',
  ],
  webpackFinal: async (config, {configType}) => {
    // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
    config.output.path = path.resolve(__dirname, '..', 'storybook-static');
    config.resolve = {
      ...config.resolve,
      roots: ['../src'],
      alias: {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
        '@storybook/react-native': '@storybook/react',
        'styled-components/native': 'styled-components',
        'react-native-svg': 'react-native-svg-web',
        '@': path.resolve(__dirname, '..', 'src'),
      },
    };
    return config;
  },
  staticDirs: ['../src/assets'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  },
};
