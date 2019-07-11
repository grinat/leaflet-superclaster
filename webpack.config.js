const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'
const externals = prod ? {
  leaflet: {
    commonjs: 'leaflet',
    commonjs2: 'leaflet',
    amd: 'leaflet',
    root: 'L' // indicates global variable
  }
} : {}

module.exports = {
  entry: {
    bundle: [
      prod ? './src/SuperclusterGroup.js' : './src/develop/watch.js'
    ]
  },
  devServer: {
    host: '0.0.0.0'
  },
  resolve: {
    extensions: ['.js']
  },
  mode,
  output: {
    path: __dirname + '/dist',
    filename: 'leaflet-superclaster.js',
    chunkFilename: 'leaflet-superclaster.js',
    library: prod ? 'leaflet-superclaster' : undefined,
    libraryTarget: prod ? 'umd' : undefined,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude: /(node_modules|bower_components)/,
        include: [
          path.join(__dirname, 'src'),
          // for support ie 11
          path.join(__dirname, 'node_modules/supercluster'),
          path.join(__dirname, 'node_modules/kdbush')
        ],
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
        test: /.worker\.js$/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              inline: true,
              name: 'leaflet-superclaster.worker.js'
            }
          },
          {
            loader: 'babel-loader'
          }
        ]
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
    }),
    new webpack.DefinePlugin({
      'process.env': {}
    })
  ],
  externals,
  optimization: {
    // minimize: false,
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          evaluate: false,
          // drop_console: true
        }
      })
    ]
  },
  devtool: 'source-map'
}

