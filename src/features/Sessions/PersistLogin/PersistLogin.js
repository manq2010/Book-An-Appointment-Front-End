import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refreshAccessToken } from '../sessionSlice';
import Loading from '../../Loading/Loading';

function PersistLogin() {
  const loading = useSelector((state) => state.session.loading);
  const accessToken = useSelector((state) => state.session.accessToken);
  const refreshToken = useSelector((state) => state.session.refreshToken);
  const dispatch = useDispatch();

  useEffect(() => {
    function verifyRefreshToken() {
      try {
        dispatch(refreshAccessToken(refreshToken));
      } catch (error) {
        Error(error);
      }
    }
    if (!accessToken) {
      verifyRefreshToken();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, refreshToken]);

  return (
    <>
      {loading ? <Loading isLoading={loading} /> : <Outlet />}
    </>
  );
}

export default PersistLogin;
