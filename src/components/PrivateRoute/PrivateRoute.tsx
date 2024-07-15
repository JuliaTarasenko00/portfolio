import { Navigate } from 'react-router-dom';
import { useAuth } from '../../helpers/context/authContext/useAuth';

interface IPrivateRoute {
  children: React.ReactNode;
  redirectedTo: string;
}

export default function PrivateRoute({
  children,
  redirectedTo = '/',
}: IPrivateRoute) {
  const { token } = useAuth();

  return token ? children : <Navigate to={redirectedTo} />;
}
