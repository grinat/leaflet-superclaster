const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'
const externals = prod ? {leaflet: 'L'} : {}
const library = prod ? 'amd' : undefined

module.exports = {
  entry: {
    bundle: [
      prod ? './src/SuperclusterGroup.js' : './src/develop/watch.js'
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  mode,
  output: {
    path: __dirname + '/dist',
    filename: 'leaflet-superclaster.js',
    chunkFilename: 'leaflet-superclaster.js',
    library,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /Worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            inline: true
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      template: 'src/develop/watch.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'supercluster.css'
    })
  ],
  externals,
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            evaluate: false,
          }
        }
      })
    ]
  },
  devtool: 'source-map'
}

