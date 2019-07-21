import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import DeletedMemoListPage from '../pages/trash/DeletedMemoList';
import { Dispatch, bindActionCreators } from 'redux';
import { fetchDeletedMemoList } from '../actions';
import { FetchDeletedMemoListAction } from '../reducers/memo';
import { RootState } from '../reducers';
import { RouteComponentProps, Redirect } from 'react-router';

interface MatchProps {
  id: string
}

interface Props {
  memos: Memo[]
  fetchDeletedMemoList(): FetchDeletedMemoListAction
}

class DeletedMemoListContainer 
extends React.Component<Props & RouteComponentProps<MatchProps>> {
  componentWillMount() {
    const {fetchDeletedMemoList} = this.props;
    fetchDeletedMemoList()
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
