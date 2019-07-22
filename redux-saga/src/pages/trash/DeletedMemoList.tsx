import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle, SidebarBackButton } from '../../components/Sidebar';
import Main from '../../components/Main';
import { Memo } from '../../models';
import TrashRouter from '../../routes/trash';
import { List, ListItem } from '../../components/List';

interface Props {
  memos: Memo[]
}

const DeletedMemoListPage: React.FC<Props & RouteComponentProps> = props => {
    return (
      <Layout>
        <Sidebar>
          <SidebarBackButton to="/" />
          <SidebarTitle>휴지통</SidebarTitle>
          <DeletedMemoList {...props} />
        </Sidebar>
        <Main>
          <div style={{ margin: '10px' }}>
            <TrashRouter />
          </div>
        </Main>
      </Layout>
    );
}

export default DeletedMemoListPage;

const DeletedMemoList: React.FC<Props> = props => {
  const {memos} = props;
  
  const memoTitle = (content: string): string => 
    content.substr(0, 15);

  return (
    <List>
      {memos.map((memo, idx) =>
        <ListItem key={idx} first={idx === 0}>
          <Link to={`/trash/${memo.id}`}>
            {memoTitle(memo.content)}
          </Link>
        </ListItem>
      )}
    </List>
  )
}
