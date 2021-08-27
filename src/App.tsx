import { Redirect, Route, Switch } from 'react-router-dom';
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
      <PrivateRoute exact path='/' isAuthorized={isAuthorized}
        redirect='/login' component={Search}
      />

      {/* 인증되지 않았다면 로그인 페이지로, 인증되었다면 검색 페이지로 이동 */}
      <PrivateRoute isAuthorized={!isAuthorized}
        path='/login' redirect='/search' component={Login}
      />

      <PrivateRoute isAuthorized={isAuthorized}
        path='/search' redirect='/login' component={Search}
      />
      <PrivateRoute isAuthorized={isAuthorized}
        path='/alarm' redirect='/login' component={Alarm}
      />
    </Switch>
  );
};

export default App;
