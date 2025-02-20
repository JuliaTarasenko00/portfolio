import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { routers } from '../helpers/routes';
import Loader from './ui/loader/Loader';

const Layout = lazy(() => import('../components/Layout/Layout'));
const MainPage = lazy(() => import('../pages/Main/Main'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routers.home} element={<Layout />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
