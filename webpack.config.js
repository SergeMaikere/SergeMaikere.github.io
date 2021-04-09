export default {
  entry: "./js/index.js",
  output: {
    filename: "./js/bundle.js",
    publicPath: ''
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        loader: 'css-loader'
      }
    ]
  }	
};