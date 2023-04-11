import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

function PrivateRoute({ children }) {
  const loading = useSelector((state) => state.session.loading);
  const accessToken = useSelector((state) => state.session.accessToken);
  const location = useLocation();
  const fromLocation = (location.state)?.from;
  const previousLocation = fromLocation || { pathname: '/login' };

  if (accessToken) {
    return children;
  } if (loading) {
    return <Loading isLoading={loading} />;
  } if (!accessToken && !loading) {
    return <Navigate to={previousLocation} state={{ from: location }} replace />;
  }
  return <p>Something went wrong</p>;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
