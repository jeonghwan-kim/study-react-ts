import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import { addMemo } from '../actions';
import { AddMemoAction } from '../reducers/memo';
import AddMemoPage from '../pages/memo/AddMemo'
import { Dispatch, bindActionCreators } from 'redux';
import { RootState } from '../reducers';

interface Props {
  apiCalling: boolean
  addMemo(memos: Memo): AddMemoAction
}

class AddMemoContainer extends React.Component<Props> {
  render() {
    return <AddMemoPage {...this.props} />
  }
}

const mapStateToProps = (state: RootState) => ({
  apiCalling: state.app.apiCalling
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    addMemo,
  }, dispatch)
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddMemoContainer)
