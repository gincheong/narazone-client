import { Route, Switch } from 'react-router-dom';
// routes
import PrivateRoute from './routes/PrivateRoute';
// pages
import Login from './pages/Login';
import Search from './pages/Search';
import Alarm from './pages/Alarm';

const App = () => {
  // TODO 서버에서 인증받기
  const isAuthorized = true;

  return (
    <Switch>
      <Route path='/login' component={Login} />
      <PrivateRoute isAuthorized={isAuthorized} path='/search' component={Search} />
      {/* <PrivateRoute isAuthorized={isAuthorized} path='/alarm' component={Alarm} /> */}
    </Switch>
  );
};

export default App;
