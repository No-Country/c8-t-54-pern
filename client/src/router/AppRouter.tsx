import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { Roles } from '../models/roles';
import { PrivateRoutes, PublicRoutes } from '../models/routes';
import RoutesWithNotFound from '../utils/RoutesWithNotFound';
import AuthGuard from './guards/AuthGuard';
import RoleGuard from './guards/RoleGuard';
import '../index.css'
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const Admin = lazy(() => import('../pages/Private/Admin/Admin'))
const Private = lazy(() => import('../pages/Private/Private'))
function AppRouter() {
  return (
      <Suspense fallback={<>Cargando</>}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path='/' element={<Navigate to ={PrivateRoutes.PRIVATE} />}/>
              <Route path='*' element={<>NOT FOUND</>}/>
              <Route path={PublicRoutes.LOGIN} element={<Login />}/>
              <Route path={PublicRoutes.REGISTER} element={<Register />}/>
              <Route path={PublicRoutes.HOME} element={<Home />}/>
              <Route element={<AuthGuard privateValidation={true}/>} >
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />}/>
              </Route>
             <Route element={<RoleGuard rol={Roles.ADMIN} />}> 
                <Route path={`${PrivateRoutes.PRIVATE}/${PrivateRoutes.ADMIN}/*`} element={<Admin />}/>
               </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
      </Suspense>
  );
}

export default AppRouter;
