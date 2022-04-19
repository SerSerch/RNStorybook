const path = require('path');

module.exports = {
  resolve: {
    roots: ['./src'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
