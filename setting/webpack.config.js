module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: __dirname + "/dist"
  },

  // 디버깅을 위해 빌드 결과물에 소스맵 추가 
  devtool: "source-map",

  resolve: {
    // 파일 확장자 처리
    extensions: [".ts", ".tsx", ".js",]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },

  module: {
    rules: [
      // .ts나 .tsx 확장자를 ts-loader가 처리 
      { test: /\.tsx?$/, loader: "ts-loader" },
    ]
  },
};