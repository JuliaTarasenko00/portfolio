import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/ui/Loader/Loader';

export const CustomOutlet = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};
