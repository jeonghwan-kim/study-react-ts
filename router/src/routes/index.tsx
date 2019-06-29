import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect, RouteComponentProps  } from 'react-router-dom';

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/a" exact component={A} />
      <Route path="/b/:id" exact component={B} />
      <Route path="/c" component={C} />
      <Route path="/" exact component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Root;

const A: React.FC = () => <div>A</div>;

interface RouteMatchProps {
  id: string;
}

const B: React.FC<RouteComponentProps<RouteMatchProps>> = (props) => {
  const { match } = props;
  
  return <div>B, {match.params.id}</div>;
}

const C: React.FC<RouteComponentProps> = (props) => {
  const { match: { url } } = props;
  
  return (
    <React.Fragment>
      <div>C</div>
      <Switch>
        <Route path={`${url}/d`} exact component={()=> <div>D</div>} />
        <Route path={`${url}/e`} exact component={()=> <div>E</div>} />
        <Route path={`${url}/*`} component={() => <Redirect to="/" />} />
      </Switch>
    </React.Fragment>
  )
}

const Home: React.FC = () => <div>Home</div>

const NotFound: React.FC = () => <div>404</div>
