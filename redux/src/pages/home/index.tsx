import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle } from '../../components/Sidebar';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';
import { List, ListItem } from '../../components/List';
import { Memo } from '../../models';

interface Props {
  memos: Memo[]
  deletedMemos: Memo[] 
}

const HomePage: React.FC<Props> = props => {
  const { memos, deletedMemos } = props
  
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>폴더</SidebarTitle>
        <List>
          <ListItem first>
            <Link to="/memo">메모({memos.length})</Link>
          </ListItem>
          <ListItem>
            <Link to="/trash">휴지통({deletedMemos.length})</Link>
          </ListItem>
        </List>
      </Sidebar>
      <Main>
        <div style={{
          margin: '10px'
        }}><AddMemoBtn /></div>
      </Main>
    </Layout>
  );
}

export default HomePage;
