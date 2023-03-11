import { lazy, Suspense } from 'react';
//import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
//import { Navigation } from '../Navigation/Navigation';
//import { PrivateRoute } from '../PrivateRoute';
//import { RestrictedRoute } from '../RestrictedRoute';

//import { useAuth } from 'hooks';
//import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  /*const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);*/

  return (
    <Suspense>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
    </Suspense>
  );
};
