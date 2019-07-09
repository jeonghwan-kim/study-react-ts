import * as React from 'react'
import {connect} from 'react-redux'
import {FetchMemoListAction, fetchMemoList, AppState} from '../index'
import { Memo } from '../models';
import MemoPage from '../pages/memo';
import * as api from '../apis';
import { Dispatch, bindActionCreators } from 'redux';

interface MemoContainerProps {
  memos: Memo[]
  fetchMemoList(memos: Memo[]): FetchMemoListAction
}

class MemoContainer extends React.PureComponent<MemoContainerProps> {
  componentDidMount() {
    const momos = api.fetchMemoList()
    this.props.fetchMemoList(momos)
  }

  render() {
    return <MemoPage {...this.props} />
  }
}

const mapStateToProps = (state: AppState) => ({
  memos: state.memo.memos
})

// TODO Dispatch<T> T를 찾아야 함
// 참고: https://github.com/piotrwitek/react-redux-typescript-guide
const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    fetchMemoList
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoContainer)
