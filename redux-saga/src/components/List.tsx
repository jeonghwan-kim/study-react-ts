import * as React from "react";

export const List: React.FC = ({ children }) => 
  <ul
    style={{
      listStyle: 'none',
      paddingLeft: '0',
    }}>
    { children }
  </ul>


interface ListItemProps {
  first?: boolean;
}

export const ListItem: React.FC<ListItemProps> = props => {
  const { children, first } = props;

  return (
    <li
      style={{
        padding: '15px',
        borderBottom: '1px solid #ddd',
        borderTop: first ? '1px solid #ddd' : 'none',
      }}
    >
      {children}
    </li>

  )
}
  