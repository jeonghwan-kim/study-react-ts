import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import * as api from '../apis';
import { addMemo, AddMemoAction } from '../actions';
import AddMemoPage from '../pages/memo/AddMemo'
import { Dispatch, bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

interface Props {
  addMemo(memos: Memo): AddMemoAction
}

interface State {
  newMemoId: number
}

class AddMemoContainer extends React.Component<Props, State> {
  readonly state = {
    newMemoId: 0
  }

  handleSubmit = (memo: Memo) => {
    const {addMemo} = this.props;

    const newMemo = api.addMemo(memo)
    addMemo(newMemo)

    this.setState({ newMemoId: newMemo.id!})
  }

  render() {
    const {newMemoId} = this.state
    if (newMemoId > 0) return <Redirect to={`/memo/${newMemoId}`} />
    
    return <AddMemoPage onSubmit={this.handleSubmit} />
  }
}

const mapStateToProps = () => ({

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
