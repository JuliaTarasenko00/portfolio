import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routers } from '../helpers/routes';

const Layout = lazy(() => import('./Layout/Layout'));
const Resume = lazy(() => import('../pages/Resume/Resume'));
const Projects = lazy(() => import('../pages/Projects/Projects'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const AboutMe = lazy(() => import('../pages/AboutMe/AboutMe'));
const AdminPage = lazy(() => import('../pages/Admin/MainPage'));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading ...</p>}>
        <Routes>
          <Route path={routers.home} element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path={routers.resume} element={<Resume />} />
            <Route path={routers.projects} element={<Projects />} />
          </Route>
          <Route path={routers.admin} element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
