const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    buffer: path.resolve(__dirname, 'node_modules/buffer/'),
  }),
  addWebpackPlugin(new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
  }))
);
