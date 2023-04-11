import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

function PrivateRoute({ children }) {
  const loading = useSelector((state) => state.session.loading);
  const accessToken = useSelector((state) => state.session.accessToken);
  const role = useSelector((state) => state.session.currentUser.role);

  const location = useLocation();
  const fromLocation = (location.state)?.from;
  const previousLocation = fromLocation || { pathname: '/' };

  if (accessToken && role === 'admin') {
    return children;
  } if (loading) {
    return <Loading isLoading={loading} />;
  } if (!accessToken && !loading) {
    return <Navigate to={previousLocation} state={{ from: location }} replace />;
  }
  if (role !== 'admin' && accessToken) {
    return <Navigate to={previousLocation} state={{ from: location }} replace />;
  }
  return <p>This is an admin only page</p>;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
