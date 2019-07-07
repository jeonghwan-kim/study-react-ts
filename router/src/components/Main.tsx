import * as React from 'react';

const style: React.CSSProperties = {
  flex: 1,
  overflow: 'auto',
  border: 'solid 1px #ccc',
  borderRadius: '4px'
}

const Main: React.FC = (props) => {
  return (
    <main style={style}>
      {props.children}
    </main>
  )
}

export default Main;
