import "@babel/polyfill";

import webpack from "webpack";

import autoprefixer from "autoprefixer";
import path from "path";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ImageMinPlugin from "imagemin-webpack-plugin";
import UglifyJSPlugin from "uglifyjs-webpack-plugin";

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    main: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      // JS
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
              cacheDirectory: true,
              plugins: ["react-hot-loader/babel"],
            },
          },
        ],
      },
      // CSS/SASS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
            options: { sourceMap: true },
          },
          {
            loader: "css-loader",
            options: {
              // modules: true, // CSS modules
              // localIdentName: "[name]__[local]__[hash:base64:5]", // CSS modules option, names for class
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [autoprefixer],
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      // Fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              name: "[name].[ext]",
            },
          },
        ],
      },
      // IMG
      {
        test: /\.(png|gif|ico|svg|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name]-[sha1:hash:7].[ext]",
            },
          },
          "img-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
      exclude: ["bundle.js"],
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
    }),
    new BundleAnalyzerPlugin({}),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({ sourceMap: true }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { sourceMap: true },
      }),
      new ImageMinPlugin({
        test: /\.(png|jpe?g|gif|svg)$/,
      }),
    ],
  },
};
