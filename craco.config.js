const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@c': path.resolve(__dirname, 'src/components'),
      '@a': path.resolve(__dirname, 'src/assets'),
      '@s': path.resolve(__dirname, 'src/store'),
    }
  }
};