const path = require('path');

module.exports = {
  resolve: {
    roots: ['./src'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
