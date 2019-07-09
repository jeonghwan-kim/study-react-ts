const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "main.js",
  },

  devtool: "source-map",
  
  devServer: {
    contentBase: "./",
    publicPath: '/dist/'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js",]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.css?$/, loader: "css-loader" },
    ]
  },
};