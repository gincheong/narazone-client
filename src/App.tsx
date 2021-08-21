import { Redirect, Route, Switch } from 'react-router-dom';
// pages
import Login from './pages/Login';
import Search from './pages/Search';

const App = () => {
  // TODO 서버에서 인증받기
  const isAuthorized = true;

  return (
    <>
      {!isAuthorized ?
        // 인증 여부에 따라 페이지 이동
        <Redirect to='/login' /> :
        <Redirect to='/search' />
      }
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/search' component={Search} />
      </Switch>
    </>
  );
};

export default App;
