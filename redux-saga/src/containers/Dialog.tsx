import * as React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import * as models from '../models';
import Dialog from '../components/Dialog';
import { CancelDialogAction, ConfirmDialogAction } from '../reducers/app';
import { confirmDialog, cancelDialog } from '../actions'

interface Props {
  dialog?: models.Dialog
  cancelDialog(): CancelDialogAction
  confirmDialog(): ConfirmDialogAction
}

class DialogContainer extends React.Component<Props> {
  render() {
    return (
      <Dialog {...this.props}/>
    )
  }
}

export default connect(
  (state: RootState) => ({
    dialog: state.app.dialog
  }), 
  { confirmDialog, cancelDialog }
)(DialogContainer)