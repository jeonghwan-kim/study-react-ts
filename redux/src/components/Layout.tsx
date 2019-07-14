import * as React from 'react';

const style: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  margin: '10px',
}

const Layout: React.FC = (props) => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default Layout;
