import * as React from 'react';
import { Link } from 'react-router-dom';

const style: React.CSSProperties = {
  width: '200px',
  border: 'solid 1px #ccc',
  marginRight: '10px',
  borderRadius: '4px',
}

const Sidebar: React.FC = (props) => {
  return (
    <aside style={style}>
      {props.children}
    </aside>  
  )
}

export default Sidebar;

export const SidebarTitle: React.FC = ({children}) => 
  <h1 style={{
    padding: '0 10px',
  }}>
    {children}
  </h1>

interface SidebarBackButtonProps {
  to: string;
}

export const SidebarBackButton: React.FC<SidebarBackButtonProps> = ({to}) => 
  <Link style={{
      textDecoration: 'none',
      fontSize: '24px',
      padding: '10px',
      display: 'block',
    }}
    to={to}
    >{`<`}</Link>
  