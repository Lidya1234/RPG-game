const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js'
      },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },

          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },

        {
            test: /\.js$/,
            exclude: /(node_modules)/, // Set loaders to transform files.
            include: path.resolve(__dirname, 'src/'),
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
    ]
  },

  plugins: [
    //new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),

    new webpack.DefinePlugin({
        'typeof CANVAS_RENDERER': JSON.stringify(true),
        'typeof WEBGL_RENDERER': JSON.stringify(true)
      }),
    
        // new CopyWebpackPlugin({
        //   patterns: [
        //     { from: path.resolve(__dirname, 'index.html'), to: path.resolve(__dirname, 'dist') },
        //     { from: path.resolve(__dirname, 'assets'), to: path.resolve(__dirname, 'dist/assets') },
        //   ],
        // }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},

};