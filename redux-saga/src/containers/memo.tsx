import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import * as api from '../apis';
import { Dispatch, bindActionCreators } from 'redux';
import { fetchMemo, deleteMemo } from '../actions';
import {FetchMemoAction, DeleteMemoAction} from '../reducers/memo';
import { RootState } from '../reducers';
import { RouteComponentProps } from 'react-router';
import MemoPage from '../pages/memo/Memo';

interface MatchProps {
  id: string;
}

interface Props {
  apiCalling: boolean
  memos: Memo[]
  fetchMemo(id: number): FetchMemoAction
  deleteMemo(id: number): DeleteMemoAction
}

class MemoContainer 
extends React.Component<Props & RouteComponentProps<MatchProps>, {}> {

  componentDidMount() {
    const {fetchMemo, match: {params: {id}}} = this.props;
    const memoId = parseInt(id, 10)
    if (!isNaN(memoId)) {
      fetchMemo(memoId)
    }
  }
  
  render() {
    return <MemoPage {...this.props} />
  }
}

const mapStateToProps = 
(state: RootState, props: RouteComponentProps<MatchProps>) => {
  const memoId = parseInt(props.match.params.id, 10)

  return {
    memo: state.memo.memos.find(memo => memo.id == memoId),
    apiCalling: state.app.apiCalling,
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
