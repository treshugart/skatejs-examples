module.exports = {
  devtool: 'source-map',
  entry: {
    './bundle.js': './index.js'
  },
  output: {
    path: './',
    filename: '[name]',
    sourceMapFilename: '[file].map',
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      query: {
        plugins: ['babel-plugin-transform-class-properties', ['babel-plugin-transform-react-jsx', { pragma: 'h' }]],
        presets: ['babel-preset-es2015', 'babel-preset-react'],
      },
    }],
  }
};
