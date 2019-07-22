import * as React from 'react';
import { Switch, RouteComponentProps, Route, Redirect, withRouter } from 'react-router-dom';
import DeletedMemoContainer from '../../containers/DeletedMemo';

const TrashRouter: React.FC<RouteComponentProps> = props => {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}/:id`} exact component={DeletedMemoContainer} />
      <Route path={`${match.url}/`} exact component={() => <div>휴지통이 비었습니다.</div>} />
    </Switch>
  )
}

export default withRouter(TrashRouter);
