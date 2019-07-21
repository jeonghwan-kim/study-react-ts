import * as React from 'react';
import ToastList from '../containers/ToastList'

const style: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  margin: '10px',
}

const Layout: React.FC = (props) => {
  return (
    <React.Fragment>
      <ToastList />
      <div style={style}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Layout;
