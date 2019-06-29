import * as React from 'react';
import { Switch, RouteComponentProps, Route, Redirect, withRouter } from 'react-router-dom';
import NewMemo from '../../pages/memo/NewMemo';
import MemoContent from '../../pages/memo/MemoContent';

const MemoRouter: React.FC<RouteComponentProps> = props => {
  const { match } = props;
  
  return (
    <Switch>
      <Route path={`${match.url}/add`} component={NewMemo} />
      <Route path={`${match.url}/:id`} component={MemoContent} />
      <Redirect path={`${match.url}/*`} to={`${match.url}`} />
    </Switch>
  )
}

export default withRouter(MemoRouter);
