import * as React from 'react'
import {connect} from 'react-redux'
import { Memo } from '../models';
import MemoListPage from '../pages/memo/MemoList';
import * as api from '../apis';
import { Dispatch, bindActionCreators } from 'redux';
import { FetchMemoListAction, fetchMemoList } from '../actions';
import { RootState } from '../reducers';
import { RouteComponentProps, Redirect } from 'react-router';

interface MatchProps {
  id: string;
}

interface Props {
  memos: Memo[]
  fetchMemoList(memos: Memo[]): FetchMemoListAction
}

class MemoListContainer 
extends React.Component<Props & RouteComponentProps<MatchProps>> {
  componentWillMount() {
    const {fetchMemoList} = this.props;
    const memos = api.fetchMemoList()
    fetchMemoList(memos)
  }

  render() {
    const {memos, match: {isExact, url}, location: {pathname}} = this.props
    const hasMemos = memos.length > 0
    const isAddPath = pathname === `${url}/add`

    if (isExact && hasMemos) {
      return <Redirect to={`${url}/${memos[0].id}`} />
    }

    return <MemoListPage {...this.props} hasAddMemoBtn={!isAddPath}/>
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
)(MemoListContainer)
