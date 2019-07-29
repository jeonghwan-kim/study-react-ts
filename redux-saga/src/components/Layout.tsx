import * as React from 'react';
import ToastListContainer from '../containers/ToastList'
import DialogContainer from '../containers/Dialog'

const style: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  margin: '10px',
}

const Layout: React.FC = (props) => {
  return (
    <React.Fragment>
      <ToastListContainer />
      <DialogContainer />
      <div style={style}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Layout;
