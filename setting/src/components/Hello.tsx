import * as React from "react";

interface HelloProps {
  name: string;
}

// Stateless Functional Component Style
const Hello: React.FC<HelloProps> = props => {
  const { name } = props;
  return <h1>Hello { name || 'world' } !</h1>;
}

// // Class style 
// class Hello extends React.PureComponent<HelloProps, {}> {
//   render() {
//     const { name } = this.props;
//     return <h1>Hello  { name || 'world' } !</h1>; 
//   }
// }

export default Hello;
