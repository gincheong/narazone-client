import { Redirect, Route } from "react-router";
import { RouteProps } from 'react-router-dom';

const PrivateRoute = (props: RouteProps & Props) => {
  const { isAuthorized, redirect, ...rest } = props;

  // 인증된 상태라면 path로 이동, 그렇지 않다면 'redirect'로 redirect함
  return ( !isAuthorized ?
      <Redirect to={redirect} /> :
      <Route {...rest} />
  );
};

interface Props {
  isAuthorized: boolean;
  redirect: string;
}

export default PrivateRoute;