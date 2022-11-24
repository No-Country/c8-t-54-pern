import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppStore } from '../../app/store';
import { Roles } from '../../models/roles';
import { PublicRoutes } from '../../models/routes';

interface Props {
  rol: Roles;
}

function RoleGuard({ rol }: Props) {
  const userState = useSelector((store: AppStore) => store.auth);
  return userState.userRole === rol ? <Outlet /> : <Navigate replace to={PublicRoutes.HOME} />;
}
export default RoleGuard;