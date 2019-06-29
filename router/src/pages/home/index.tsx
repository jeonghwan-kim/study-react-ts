import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Sidebar>
        <h1>폴더</h1>
        <ul>
          <li><Link to="/memo">메모</Link></li>
          <li><Link to="/trash">휴지통</Link></li>
        </ul>
      </Sidebar>
      <Main>
        <AddMemoBtn />
      </Main>
    </Layout>
  );
}

export default HomePage;
