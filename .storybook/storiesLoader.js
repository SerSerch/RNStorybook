const fs = require('fs'),
  path = require('path');

const openDir = dir => {
  const res = [];

  fs.readdirSync(dir, {withFileTypes: true}).forEach(file => {
    if (file.isFile()) {
      res.push(path.join(dir, file.name));
    } else {
      res.push(...openDir(path.join(dir, file.name)));
    }
  });

  return res;
};

const STORIES_DIR = path.join(__dirname, '..', 'src', 'components');
const STORIES = openDir(STORIES_DIR)
  .filter(fileName => fileName.endsWith('.stories.js'))
  .map(
    fileName => `    '${fileName
      .replace(path.join(__dirname, '..'), '..')
      .replace(/\\/g, '/')}',
    `,
  );

let componentCode = `const path = require('path');

module.exports = {
  stories: [
  ${STORIES}],
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
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};`;

fs.writeFileSync(path.resolve(__dirname, 'main.js'), componentCode);
