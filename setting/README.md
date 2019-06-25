# 개발 환경 설정

프로젝트 초기화:
```
$ npm init -y
```

리액트 패키지 설치: 

```
$ npm i --save react react-dom @types/react @types/react-dom
```

웹팩 설정을 위한 패키지 설치:

```
$ npm i --save-dev typescript ts-loader webpack webpack-cli
```

타입스크립트 설정 파일 `tsconfig.json` 작성

```
$ npx typescript --init
```


```json
{ 
  "compilerOptions": { 
    "outDir": "./dist/", 
    "sourceMap": true, 
    "noImplicitAny": true, 
    "module": "commonjs", 
    "target": "es6", 
    "jsx": "react" 
  }, 
  "include": [ 
    "./src/**/*" 
  ] 
}
```

* `outDir`: 타입스크립트 코드를 js로 트랜스파일한 결과 위치
* `sourceMap`: ?
* `noImplicitAny`: ?
* `module`: ?
* `target`: ?
* `jsx`: ?
* `includes`: 타입스크립트 코드 위치 

리액트 컴포넌트 샘플 (src/components/Hello.tsx)

```tsx
import * as React from "react";

interface HelloProps { 
  name: string; 
}

// Stateless Functional Component Style
export const Hello: React.FC<HelloProps> = props => {
  const { name }  = props;
  return <h1>Hello {name || 'world'}!</h1>;
}
  
// Class style 
export class Hello extends React.PureComponent<HelloProps, {}> { 
  render() { 
    const { name }  = this.props;
    return <h1>Hello  {name || 'world'}!</h1>; 
  } 
}

export default Hello;
```

* 마크업 코드가 있는 파일은 tsx 확장자로 생성한다
* 컴포넌트 프로퍼티를 HelloProps 인터페이스로 정의한다
* Stateless 함수형 컴포넌트는 React.FC 타입으로 생성한다
* 일반 컴포넌트는 React.PureComponent 나 React.Component 클래스를 상속해 만든다 

PureComponet와 Component의 차이점 
* tbd


어플리케이션 진입점 (src/index.tsx)

```ts
import * as React from "react"; 
import * as ReactDOM from "react-dom"; 
import { Hello } from "./components/Hello"; 

ReactDOM.render( 
  <Hello name="React" />,
  document.getElementById("app") 
);
```

마크업 (index.html)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React TS!</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./dist/main.js"></script>
  </body>
</html>
```

웹팩 설정 (webpac.config.js)

```js
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: __dirname + "/dist"
  },

  // 디버깅을 위해 빌드 결과물에 소스맵 추가 
  devtool: "inline-source-map",

  resolve: {
    // 파일 확장자 처리
    extensions: [".ts", ".tsx", ".js",]
  },

  module: {
    rules: [
      // .ts나 .tsx 확장자를 ts-loader가 처리 
      { test: /\.tsx?$/, loader: "ts-loader" },
    ]
  },
};
```

빌드 실행 스크립트 등록 (package.json)

```json
{
  "scripts": {
    "start": "webpack"
  }
}
```

빌드 실행

```
$ npm run build
```

브라우져로 index.html을 열면 결과를 확인할 수 있다.
![]()

웹팩 개발서버 설정
TBD
