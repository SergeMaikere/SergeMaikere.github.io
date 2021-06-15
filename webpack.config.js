export default {
  entry: "./index.js",
  output: {
    filename: "./bundle.js",
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