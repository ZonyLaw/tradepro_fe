const path = require('path');

module.exports = {
  entry: './src/index.js',  // Adjust the entry point as needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        enforce: 'pre',
        loader: 'source-map-loader',
        exclude: /bootstrap\.min\.css$/  // Exclude bootstrap.min.css from source map processing
      }
    ]
  },
  devtool: 'source-map'
};