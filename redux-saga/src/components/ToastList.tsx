import * as React from 'react'
import {Toast} from '../models';

interface Props {
  toasts: Toast[]
}

const ToastList: React.FC<Props> = props => {
  const style: React.CSSProperties = {
    position: 'fixed',
    right: '15px',
    top: '15px',
    width: '250px',
  }

  return (
    <div style={style}>
      {props.toasts.map((toast, idx) => {
        return (
          <ToastItem toast={toast} key={idx} />
        )
      })}
    </div>
  )
}

export default ToastList


const ToastItem: React.FC<{toast: Toast}> = ({toast: {text}}) => {
  const style: React.CSSProperties = {
    display: 'inline-block',
    background: '#fff',
    padding: '15px 20px',
    borderRadius: '4px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    marginBottom: '15px',
  }

  return (
    <div style={style}>
      {text}
    </div>
  )
}

