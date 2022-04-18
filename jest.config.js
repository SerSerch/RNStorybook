/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  preset: 'react-native',
  cacheDirectory: './cache',
  coveragePathIgnorePatterns: ['./app/utils/vendor'],
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
  transformIgnorePatterns: [
    '/node_modules/(?!react-native|react-clone-referenced-element|react-navigation)',
  ],
  // clearMocks: true,
  // testEnvironment: "jsdom",
  // watchman: true,
};
