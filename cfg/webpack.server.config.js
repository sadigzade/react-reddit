const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV || 'development';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
  target: 'node',
  mode: NODE_ENV,
  entry: path.resolve(__dirname, '../src/server/server.js'),
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx.?$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              onlyLocals: true,
            },
          },
          'sass-loader',
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.tsx', '.ts'],
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js',
  },
  optimization: {
    minimize: false,
  },
};
