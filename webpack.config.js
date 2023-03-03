const path = require('path');

const config = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'console-override.js',
    path: path.resolve(__dirname),
    library: 'consoleOverride',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  }
  if (argv.mode === 'production') {
    config.output.filename = 'console-override.min.js'
  }
  return config;
};