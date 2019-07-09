import * as React from 'react';
import { Link, Route, RouteComponentProps, Redirect, Switch, withRouter } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle, SidebarBackButton } from '../../components/Sidebar';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';
import MemoRouter from '../../routes/memo';
import { Memo } from '../../models';
import { fetchMemoList } from '../../apis';
import { List, ListItem } from '../../components/List';

interface MemoPageProps {
  memos: Memo[];
}

class MemoPage extends React.Component<RouteComponentProps & MemoPageProps> {
  // componentWillReceiveProps(preProps: RouteComponentProps) {
  //   const urlChanged = preProps.location.pathname !== this.props.location.pathname;
  //   if (urlChanged) {
  //     this.fetchData();
  //   }
  // }

  render() {
    const { match, location, memos } = this.props;
    const hasMemos = memos.length > 0;

    if (match.isExact && hasMemos) {
      return <Redirect to={`${match.url}/${memos[0].id}`} />
    }

    return (
      <Layout>
        <Sidebar>
          <SidebarBackButton to="/" />
          <SidebarTitle>메모</SidebarTitle>
          {hasMemos && this.renderMemoList(memos)}
        </Sidebar>
        <Main>
          <div style={{ margin: '10px' }}>
            {location.pathname !== `${match.url}/add` && <AddMemoBtn />}
            <MemoRouter />
          </div>
        </Main>
      </Layout>
    );
  }

  renderMemoList(memos: Memo[]) {
    return (
      <List>
        {memos.map((memo, idx) => 
          <ListItem key={idx} first={idx === 0}>
            <Link to={`/memo/${memo.id}`}
              style={{
                textDecoration: 'none',
                color: '#000'
              }}>
              {this.memoTitle(memo.content)}
            </Link>
          </ListItem>
        )}
      </List>
    )
  }

  memoTitle(content: string): string {
    return content.substr(0, 15);
  }
}

export default withRouter(MemoPage);
