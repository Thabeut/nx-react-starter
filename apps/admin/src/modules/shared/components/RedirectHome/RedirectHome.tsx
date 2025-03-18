import React from 'react';
import { ADMIN_PREFIX } from '@confirma/shared/utils';
import { Navigate } from 'react-router-dom';

const RedirectHome = () => {
  return <Navigate to={`${ADMIN_PREFIX}`} />;
};

export default RedirectHome;
