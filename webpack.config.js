const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    bundle: ['./src/SuperclusterGroup.js']
  },
  resolve: {
    extensions: ['.js']
  },
  mode: 'production',
  output: {
    path: __dirname + '/dist',
    filename: 'leaflet-superclaster.js',
    chunkFilename: 'leaflet-superclaster.js',
    library: 'amd'
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
          MiniCssExtractPlugin.loader,
          // 'style-loader',
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
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'supercluster.css'
    })
  ],
  externals: {
    leaflet: 'L'
  },
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

