const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const EslintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devtool: 'source-map',
  target: 'web',
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        filename: "index.html",
        favicon: path.join(__dirname, 'src/assets/', 'logo.png'),
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),	//путь к папке, где лежат картинки
          to: path.resolve(__dirname, "dist/img"),			//куда будут копированы
        },
      ],
    }),
    new EslintPlugin({ extensions: ['ts'] }),
  ],
  resolve: {
    alias: {
      img: path.join(__dirname, "src", "assets"),
    },
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: 'asset/inline',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/i,
        use: "ts-loader",
      },
    ],
   },
};