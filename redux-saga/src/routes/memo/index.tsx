import * as React from 'react';
import { Switch, RouteComponentProps, Route, withRouter } from 'react-router-dom';
import MemoContainer from '../../containers/Memo'
import AddMemoContainer from '../../containers/AddMemo'

const MemoRouter: React.FC<RouteComponentProps> = props => {
  const { match } = props;
  
  return (
    <Switch>
      <Route path={`${match.url}/add`} exact component={AddMemoContainer} />
      <Route path={`${match.url}/:id`} exact component={MemoContainer} />
    </Switch>
  )
}

export default withRouter(MemoRouter);
