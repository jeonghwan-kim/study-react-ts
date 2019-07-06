import * as React from 'react';
import { Link, Route, RouteComponentProps, Redirect, Switch } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';
import MemoRouter from '../../routes/memo';
import { Memo } from '../../models';
import { fetchMemoList } from '../../apis';

interface MemoPageState {
  memos: Memo[];
}

class MemoPage extends React.Component<RouteComponentProps, MemoPageState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      memos: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(preProps: RouteComponentProps) {
    const urlChanged = preProps.location.pathname !== this.props.location.pathname;
    if (urlChanged) {
      this.fetchData();
    }
  }

  fetchData() {
    const memos = fetchMemoList();
    this.setState({ memos });
  }

  render() {
    const { match, location } = this.props;
    const { memos } = this.state;
    const hasMemos = memos.length > 0;

    if (match.isExact && hasMemos) {
      return <Redirect to={`${match.url}/${memos[0].id}`} />
    }

    return (
      <Layout>
        <Sidebar>
          <Link to="/">뒤로 가기</Link>
          <h1>메모</h1>
          {hasMemos && this.renderMemoList(memos)}
        </Sidebar>
        <Main>
          {location.pathname !== `${match.url}/add` && <AddMemoBtn />}
          <MemoRouter />
        </Main>
      </Layout>
    );
  }

  renderMemoList(memos: Memo[]) {
    return (
      <ul>
        {memos.map((memo, idx) => 
          <li key={idx}>
            <Link to={`/memo/${memo.id}`}>{this.memoTitle(memo.content)}</Link>
          </li>
        )}
      </ul>
    )
  }

  memoTitle(content: string): string {
    return content.substr(0, 15);
  }
}

export default MemoPage;
