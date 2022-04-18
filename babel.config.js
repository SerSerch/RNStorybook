module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    [
      'transform-inline-environment-variables',
      {
        include: ['NODE_ENV'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', 'jsx'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
