import * as React from 'react'
import { RootState } from '../reducers'
import HomePage from '../pages/home'
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Memo } from '../models';
import { 
  FetchMemoListAction,
  FetchDeletedMemoListAction
} from '../reducers/memo';
import {
  fetchMemoList,
  fetchDeletedMemoList,
} from '../actions'

interface Props {
  memos: Memo[] 
  deletedMemos: Memo[] 
  fetchMemoList(): FetchMemoListAction
  fetchDeletedMemoList(): FetchDeletedMemoListAction
}

class HomeContainer extends React.Component<Props> {
  componentDidMount() {
    const { fetchMemoList, fetchDeletedMemoList } = this.props
    fetchMemoList()
    fetchDeletedMemoList()
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
