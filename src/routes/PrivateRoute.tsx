import { Redirect, Route } from "react-router";
import { RouteProps } from 'react-router-dom';

const PrivateRoute = (props: RouteProps & Props) => {
  const { isAuthorized, ...rest } = props;

  return ( !isAuthorized ?
      <Redirect to='/login' /> :
      <Route {...rest} />
  );
};

interface Props {
  isAuthorized: boolean;
}

export default PrivateRoute;