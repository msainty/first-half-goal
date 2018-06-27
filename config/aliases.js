const path = require('path');

const aliases = {
  '@components': path.resolve(__dirname, '../src/components'),
  '@pages': path.resolve(__dirname, '../src/pages'),
  '@config': path.resolve(__dirname, '../src/config'),
};

module.exports = aliases;
