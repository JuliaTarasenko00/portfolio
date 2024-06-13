import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const CustomOutlet = () => {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Outlet />
    </Suspense>
  );
};
