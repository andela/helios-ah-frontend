const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = (env) => {
  const isProduction = env === 'production';
  const envVariable = dotenv.config();
  const envKeys = Object.keys(envVariable).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envVariable[next]);
    return prev;
  }, {});

  return {
    entry: './src/index.jsx',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'index_bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader',
          }
        }, {
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
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    plugins: [
      new HtmlwebpackPlugin({
        template: './src/index.html'
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    devServer: {
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.jsx', '.js', 'png']
    }
  };
};
