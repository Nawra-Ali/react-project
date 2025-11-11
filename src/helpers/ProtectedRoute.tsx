import type { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Services/AuthContext';

interface ProtectedRouteProps {
  children: ReactElement;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { accessToken } = useAuth();

  return accessToken ? children : <Navigate to="/login" replace />;
}
