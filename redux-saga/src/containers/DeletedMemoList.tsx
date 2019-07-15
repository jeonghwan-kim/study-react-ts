import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import DeletedMemoListPage from '../pages/trash/DeletedMemoList';
import * as api from '../apis';
import { Dispatch, bindActionCreators } from 'redux';
import { fetchDeletedMemoList, FetchDeletedMemoListAction } from '../actions';
import { RootState } from '../reducers';
import { RouteComponentProps, Redirect } from 'react-router';

interface MatchProps {
  id: string
}

interface Props {
  memos: Memo[]
  fetchDeletedMemoList(memos: Memo[]): FetchDeletedMemoListAction
}

class DeletedMemoListContainer 
extends React.Component<Props & RouteComponentProps<MatchProps>> {
  componentWillMount() {
    const {fetchDeletedMemoList} = this.props;
    const momos = api.fetchDeletedMemoList()
    fetchDeletedMemoList(momos)
  }
  
  render() {
    const {memos, match: {isExact, url}} = this.props;
    const hasMemos = memos.length > 0
    
    if (isExact && hasMemos) {
      return <Redirect to={`${url}/${memos[0].id}`} />
    }

    return <DeletedMemoListPage {...this.props} />
  }
}

const mapStateToProps = (state: RootState) => ({
  memos: state.memo.deletedMemos
})

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    fetchDeletedMemoList
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletedMemoListContainer)
