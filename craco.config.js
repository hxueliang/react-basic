const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@c': path.resolve(__dirname, 'src/components'),
      '@img': path.resolve(__dirname, 'src/images'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@style': path.resolve(__dirname, 'src/style'),
    }
  }
};