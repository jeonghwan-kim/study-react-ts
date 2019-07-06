import * as React from 'react';
import { Switch, RouteComponentProps, Route, Redirect, withRouter } from 'react-router-dom';
import RemovedMemo from '../../pages/trash/RemovedMemo';

const TrashRouter: React.FC<RouteComponentProps> = props => {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}/:id`} component={RemovedMemo} />
      <Redirect path={`${match.url}/*`} to={`${match.url}`} />
    </Switch>
  )
}

export default withRouter(TrashRouter);
