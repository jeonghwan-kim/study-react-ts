import * as React from 'react'
import { RootState } from '../reducers'
import HomePage from '../pages/home'
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Memo } from '../models';
import { 
  fetchMemoList, FetchMemoListAction,
  fetchDeletedMemoList, FetchDeletedMemoListAction,
} from '../actions';
import * as api from '../apis'

interface Props {
  memos: Memo[] 
  deletedMemos: Memo[] 
  fetchMemoList(memos: Memo[]): FetchMemoListAction
  fetchDeletedMemoList(memos: Memo[]): FetchDeletedMemoListAction
}

class HomeContainer extends React.Component<Props> {
  componentDidMount() {
    const { fetchMemoList, fetchDeletedMemoList } = this.props
    
    const memos = api.fetchMemoList();
    const deletedMemos = api.fetchDeletedMemoList();

    fetchMemoList(memos)
    fetchDeletedMemoList(deletedMemos)
  }

  render() {
    return <HomePage {...this.props} />
  }
}



const mapStateToProps = (state: RootState) => {
  return {
    memos: state.memo.memos,
    deletedMemos: state.memo.deletedMemos,
  }
}

const mapDisptchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchMemoList,
    fetchDeletedMemoList,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDisptchToProps
)(HomeContainer)
