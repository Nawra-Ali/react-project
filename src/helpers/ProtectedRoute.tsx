import type { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuthenticated } from '@azure/msal-react';

interface ProtectedRouteProps {
  children: ReactElement;
}

export default function ProtectedRoute ({ children }: ProtectedRouteProps)  {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
