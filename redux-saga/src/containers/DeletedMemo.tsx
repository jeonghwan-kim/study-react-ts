import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import { Dispatch, bindActionCreators } from 'redux';
import { fetchDeletedMemo, restoreMemo} from '../actions';
import { FetchDeletedMemoAction, RestoreMemoAction} from '../reducers/memo';
import { RootState } from '../reducers';
import { RouteComponentProps } from 'react-router';
import DeletedMemo from '../pages/trash/DeletedMemo';

interface MatchProps {
  id: string;
}

interface Props {
  memo?: Memo
  fetchDeletedMemo(id: number): FetchDeletedMemoAction
  restoreMemo(id: number): RestoreMemoAction
}

class DeletedMemoContainer 
extends React.Component<Props & RouteComponentProps<MatchProps>, {}> {
  componentWillMount() {
    const {fetchDeletedMemo, match: {params: {id}}} = this.props;
    const memoId = parseInt(id, 10)
    if (!isNaN(memoId)) {
      fetchDeletedMemo(memoId)
    }
  }
  
  onRestore = (id: number) => {
    const {restoreMemo} = this.props;
    restoreMemo(id)
  }

  render() {
    return (
      <DeletedMemo 
        {...this.props} 
        onRestore={this.onRestore} />
    )
  }
}

const mapStateToProps = 
(state: RootState, props: RouteComponentProps<MatchProps>) => {
  const memoId = parseInt(props.match.params.id, 10)

  return {
    memo: state.memo.deletedMemos.find(memo => memo.id == memoId) 
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    fetchDeletedMemo,
    restoreMemo,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletedMemoContainer)
