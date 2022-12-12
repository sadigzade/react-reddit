const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  mode: NODE_ENV,
  entry: path.resolve(__dirname, '../src/client/index.jsx'),
  module: {
    rules: [
      {
        test: /\.[tj]sx.?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
  },
  devtool: setupDevtool(),
};