import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/home';
import MemoListContainer from '../containers/MemoList';
import DeletedMemoListContainer from '../containers/DeletedMemoList';

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/memo" component={MemoListContainer} />
      <Route path="/trash" component={DeletedMemoListContainer} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default Root;
