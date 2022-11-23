import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../models/routes';
import RoutesWithNotFound from '../../utils/RoutesWithNotFound';

const Details = lazy(() => import('./Details/Details'));
const Admin = lazy(() => import('./Admin/Admin'))

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.ADMIN} />} />
      <Route path={PrivateRoutes.ADMIN} element={<Admin />} />
      <Route path={PrivateRoutes.DETAILS} element={<Details />} />
    </RoutesWithNotFound>
  );
}
export default Private;