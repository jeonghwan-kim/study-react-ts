import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import MemoPage from '../pages/memo';
import * as api from '../apis';
import { Dispatch, bindActionCreators } from 'redux';
import { FetchMemoListAction, fetchMemoList } from '../actions';
import { RootState } from '../reducers';

interface Props {
  memos: Memo[]
  fetchMemoList(memos: Memo[]): FetchMemoListAction
}

class MemoContainer extends React.PureComponent<Props> {
  componentDidMount() {
    const {fetchMemoList} = this.props;
    const momos = api.fetchMemoList()
    fetchMemoList(momos)
  }

  render() {
    return <MemoPage {...this.props} />
  }
}

const mapStateToProps = (state: RootState) => ({
  memos: state.memo.memos
})

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    fetchMemoList
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoContainer)
