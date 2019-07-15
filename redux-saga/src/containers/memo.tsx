import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import * as api from '../apis';
import { Dispatch, bindActionCreators } from 'redux';
import { 
  FetchMemoAction, fetchMemo, 
  deleteMemo, DeleteMemoAction
} from '../actions';
import { RootState } from '../reducers';
import { RouteComponentProps, Redirect } from 'react-router';
import MemoPage from '../pages/memo/Memo';

interface MatchProps {
  id: string;
}

interface Props {
  memos: Memo[]
  fetchMemo(memos: Memo): FetchMemoAction
  deleteMemo(id: number): DeleteMemoAction
}

interface State {
  isMemoDeleted: boolean
}

class MemoContainer 
extends React.Component<Props & RouteComponentProps<MatchProps>, State> {
  readonly state = {
    isMemoDeleted: false
  }

  componentWillMount() {
    const {fetchMemo, match: {params: {id}}} = this.props;
    const memo = api.fetchMemo(parseInt(id, 10))
    if (memo) fetchMemo(memo)
  }
  
  onDeleteMemo = (id: number) => {
    const {deleteMemo} = this.props;
    api.deleteMemo(id)
    deleteMemo(id)
    this.setState({ isMemoDeleted: true })
  }

  render() {
    const {isMemoDeleted} = this.state
    if (isMemoDeleted) return <Redirect to="/memo" />
    
    return (
      <MemoPage 
        {...this.props} 
        onDeleteMemo={this.onDeleteMemo} />
    )
  }
}

const mapStateToProps = 
(state: RootState, props: RouteComponentProps<MatchProps>) => {
  const memoId = parseInt(props.match.params.id, 10)

  return {
    memo: state.memo.memos.find(memo => memo.id == memoId) 
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    fetchMemo,
    deleteMemo,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoContainer)
