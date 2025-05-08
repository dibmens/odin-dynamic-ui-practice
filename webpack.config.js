const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Placeholder Title",
      header: "Placeholder Header",
      metaDesc: "Placeholder description",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new ESLintPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: "development",
  output: {
    clean: true,
  },
  devServer: {
    static: "./dist",
    watchFiles: ["src/*.html"],
    hot: true,
    compress: true,
    port: 9000,
  },
};
