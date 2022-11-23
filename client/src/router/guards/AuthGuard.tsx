import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppStore } from '../../app/store';
import { PublicRoutes } from '../../models/routes';


interface Props {
  privateValidation: boolean;
}

export const AuthGuard = ({privateValidation}: Props) => {
  const userState = useSelector((store: AppStore) => store.auth);
  return userState.token ? (
    privateValidation ? (
      <Outlet />
     ) : (
      <Navigate replace to={PublicRoutes.HOME} />
     )
  ) : ( 
  <Navigate replace to={PublicRoutes.HOME} />
  )
};

export default AuthGuard;