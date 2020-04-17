import "@babel/polyfill";

import webpack from "webpack";
import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";

import autoprefixer from "autoprefixer";

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    main: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    filename: "[name].js",
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: [".jsx", ".js", "*"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      // JS
      {
        test: /\.(js|jsx)$/,
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
    }),
  ],
};
