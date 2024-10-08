import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const isGuest = useSelector((state: RootState) => state.auth.isGuest);

  if (!isAuthenticated && !isGuest) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;