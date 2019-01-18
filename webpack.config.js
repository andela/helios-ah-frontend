const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 25000, // Convert images < 8kb to base64 strings
            name: 'images/[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.jsx', '.js', 'png']
  },
};
