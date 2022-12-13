const webpack = require('webpack');
const webpackconfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webpackconfig);

compiler.run((err) => {
  if (err) {
    console.log('Compilation failed: ', err);
  }

  compiler.watch({}, (err) => {
    if (err) {
      console.log('Compilation failed: ', err);
    }
    console.log('Compilation was successfully');
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [path.resolve(__dirname, '../dist/server'), path.resolve(__dirname, '../dist/client')],
  });
});
