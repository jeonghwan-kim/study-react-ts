import * as React from 'react';
import { Switch, RouteComponentProps, Route, Redirect, withRouter } from 'react-router-dom';
import AddMemo from '../../pages/memo/NewMemo';
import ViewMemo from '../../pages/memo/ViewMemo';

const MemoRouter: React.FC<RouteComponentProps> = props => {
  const { match } = props;
  
  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddMemo} />
      <Route path={`${match.url}/:id`} component={ViewMemo} />
      <Redirect path={`${match.url}/*`} to={`${match.url}`} />
    </Switch>
  )
}

export default withRouter(MemoRouter);
