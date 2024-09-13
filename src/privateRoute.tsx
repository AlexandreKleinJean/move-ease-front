import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from './services/authService';

const PrivateRoute = ({ component: Component, ...props }: any) => {
  const navigate = useNavigate();
  const isAuthenticated = AuthService.isAuthenticated();

  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

  return <Component {...props} />;
};

export default PrivateRoute;
