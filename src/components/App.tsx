import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routers } from '../helpers/routes';
import Loader from './ui/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = lazy(() => import('../pages/Auth/Login'));
const Layout = lazy(() => import('./Layout/Layout'));
const Resume = lazy(() => import('../pages/Resume/Resume'));
const Projects = lazy(() => import('../pages/Projects/Projects'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const AboutMe = lazy(() => import('../pages/AboutMe/AboutMe'));
const AdminPage = lazy(() => import('../pages/Admin/MainPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routers.login} element={<Login />} />
          <Route path={routers.home} element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path={routers.resume} element={<Resume />} />
            <Route path={routers.projects} element={<Projects />} />
          </Route>
          <Route path={routers.admin} element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
