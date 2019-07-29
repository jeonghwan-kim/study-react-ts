import * as React from 'react'
import { CancelDialogAction, ConfirmDialogAction } from '../reducers/app';
import * as models from '../models';
import Button from './Button';

interface Props {
  dialog?: models.Dialog
  cancelDialog(): CancelDialogAction
  confirmDialog(): ConfirmDialogAction
}


const Dialog: React.FC<Props> = props => {
  const {dialog, cancelDialog, confirmDialog} = props
  if (!dialog) return null 

  return (
    <React.Fragment>
      <div style={{
        position: 'fixed',
        background: 'rgba(0,0,0,0.8)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }} />
      <div style={{
        position: 'relative',
        width: '300px',
        top: '30%',
        margin: '0 auto',
        border: 'solid 1px #ddd',
        borderRadius: '4px',
        padding: '30px 20px 10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        background: '#fff'
      }}>
        <div style={{
          marginBottom: '20px'
        }}>
          {dialog.text}
        </div>
        <div style={{
          textAlign: 'right'
        }}>
          {dialog.type === 'confirm' && <Button onClick={cancelDialog}>취소</Button>}
          <Button onClick={confirmDialog} primary>확인</Button>
        </div>
        
      </div>
    </React.Fragment>
  )
}

export default Dialog
