const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const outputPath = path.resolve(__dirname, './dist');
const srcPath = path.resolve(__dirname, './src/');
const nodeModulesPath = path.resolve(__dirname, 'node_modules/');
const bundleId = 'dev';

module.exports = {
  entry: {
    index: './src/index',
    sw: './src/sw',
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: `[name].${bundleId}.js`,
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [nodeModulesPath, srcPath]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: srcPath,
        use: 'ts-loader?configFile=tsconfig.json'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: []
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g)$/,
        exclude: /node_modules/,
        use: [
          'preload-image-loader',
          'file-loader?[path][name].[ext]'
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'url-loader?prefix=font/&limit=50000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'svg-sprite-loader',
        options: {
          runtimeCompat: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html',
      path: outputPath
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      HASH_ID: JSON.stringify(bundleId),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyPlugin(['static']),
    new WriteFilePlugin(),
    new Dotenv({
      path: './.env.local',
      safe: true,
      systemvars: true,
      silent: true,
      defaults: './.env'
    })
  ],
  devServer: {
    stats: 'errors-only',
    contentBase: outputPath,
    host: '0.0.0.0',
    port: 3000,
    inline: true,
    hot: true,
    historyApiFallback: true
  }
};
