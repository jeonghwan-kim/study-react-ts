import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle, SidebarBackButton } from '../../components/Sidebar';
import Skelton from '../../components/Skelton';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';
import MemoRouter from '../../routes/memo';
import { Memo } from '../../models';
import { List, ListItem } from '../../components/List';

interface Props {
  memos: Memo[]
  hasAddMemoBtn: boolean
  apiCalling: boolean
}

const MemoListPage: React.FC<Props> = props => {
  const { memos, apiCalling, hasAddMemoBtn } = props;
  const hasMemos = memos.length > 0;

  return (
    <Layout>
      <Sidebar>
        <SidebarBackButton to="/" />
        <SidebarTitle>메모</SidebarTitle>
        {hasMemos 
          ? <MemoList {...props} />
          : apiCalling 
            ? <Skelton style={{margin: '10px'}} />
            : null
        }
      </Sidebar>
      <Main>
        <div style={{ margin: '10px' }}>
          {hasAddMemoBtn && <AddMemoBtn />}
          <MemoRouter />
        </div>
      </Main>
    </Layout>
  );
}

export default MemoListPage

const MemoList: React.FC<Props> = ({memos}) => {
  const memoTitle = (content: string): string => {
    return content.substr(0, 15);
  }

  return (
    <List>
      {memos.map((memo, idx) =>
        <ListItem key={idx} first={idx === 0}>
          <Link to={`/memo/${memo.id}`}
            style={{
              textDecoration: 'none',
              color: '#000'
            }}>
            {memoTitle(memo.content)}
          </Link>
        </ListItem>
      )}
    </List>
  )
}
