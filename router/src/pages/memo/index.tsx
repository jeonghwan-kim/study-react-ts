import * as React from 'react';
import { Link, Route, RouteComponentProps, Redirect, Switch } from 'react-router-dom';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import AddMemoBtn from '../../components/AddMenuBtn';
import MemoRouter from '../../routes/memo';

const MemoPage: React.FC<RouteComponentProps> = (props) => {
  const { match } = props;

  return (
    <Layout>
      <Sidebar>
        <Link to="/">뒤로 가기</Link>
        <h1>메모</h1>
        <ul>
          <li><Link to="/memo/1">메모1</Link></li>
          <li><Link to="/memo/2">메모2</Link></li>
        </ul>
      </Sidebar>
      <Main>
        {props.location.pathname !== `${match.url}/add` && <AddMemoBtn />}
        <MemoRouter />
      </Main>
    </Layout>
  );
}

export default MemoPage;
