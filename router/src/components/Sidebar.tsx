import * as React from 'react';

const style: React.CSSProperties = {
  width: '200px',
  border: 'solid 1px black',
  marginRight: '10px',
}

const Sidebar: React.FC = (props) => {
  return (
    <aside style={style}>
      {props.children}
    </aside>  
  )
}

export default Sidebar;
