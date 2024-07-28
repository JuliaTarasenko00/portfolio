import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { routers } from '../helpers/routes';

const Layout = lazy(() => import('../components/Layout/Layout'));
const MainPage = lazy(() => import('../pages/Main/Main'));
const Projects = lazy(() => import('../pages/Projects/Projects'));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={routers.home} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={routers.projects} element={<Projects />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
