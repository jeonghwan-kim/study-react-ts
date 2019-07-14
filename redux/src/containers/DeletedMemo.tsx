import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import * as api from '../apis';
import { Dispatch, bindActionCreators } from 'redux';
import { 
  fetchDeletedMemo, FetchDeletedMemoAction, 
  restoreMemo, RestoreMemoAction
} from '../actions';
import { RootState } from '../reducers';
import { RouteComponentProps, Redirect } from 'react-router';
import DeletedMemo from '../pages/trash/DeletedMemo';

interface MatchProps {
  id: string;
}

interface Props {
  memo?: Memo
  fetchDeletedMemo(memo: Memo): FetchDeletedMemoAction
  restoreMemo(id: number): RestoreMemoAction
}

interface State {
  restored: boolean
}

class DeletedMemoContainer 
extends React.Component<Props & RouteComponentProps<MatchProps>, State> {
  readonly state = {
    restored: false
  }

  componentWillMount() {
    const {fetchDeletedMemo, match: {params: {id}}} = this.props;
    const memo = api.fetchMemo(parseInt(id, 10))
    if (memo) fetchDeletedMemo(memo)
  }
  
  onRestore = (id: number) => {
    const {restoreMemo} = this.props;
    api.resotreMemo(id)
    restoreMemo(id)
    this.setState({ restored: true })
  }

  render() {
    const {restored} = this.state
    if (restored) return <Redirect to="/trash" />
    
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
