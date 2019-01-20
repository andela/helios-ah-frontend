const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'index_bundle.js'
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
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                query: {
                  name: 'assets/[name].[ext]'
                }
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                query: {
                  mozjpeg: {
                    progressive: true,
                  },
                  gifsicle: {
                    interlaced: true,
                  },
                  optipng: {
                    optimizationLevel: 7,
                  }
                }
              }
            }
          ]
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map', //used in testing (alow source mapping on debugging console)
    plugins: [
      new HtmlwebpackPlugin({
        template: './src/index.html'
      })
    ],
    devServer: {
      historyApiFallback: true
    }
  }
}
