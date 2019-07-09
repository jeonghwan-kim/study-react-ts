import * as React from 'react';
import { Switch, RouteComponentProps, Route, Redirect, withRouter } from 'react-router-dom';
import AddMemo from '../../pages/memo/NewMemo';
import Memo from '../../pages/memo/Memo';

const MemoRouter: React.FC<RouteComponentProps> = props => {
  const { match } = props;
  
  return (
    <Switch>
      <Route path={`${match.url}/add`} exact component={AddMemo} />
      <Route path={`${match.url}/:id`} exact component={Memo} />
      <Route path={`${match.url}/`} exact component={() => <div>메모 없음</div>} />
    </Switch>
  )
}

export default withRouter(MemoRouter);
