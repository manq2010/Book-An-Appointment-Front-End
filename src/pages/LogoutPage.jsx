import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/Sessions/sessionSlice';

function LogoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refreshToken = useSelector((state) => state.session.accessToken);

  useEffect(() => {
    if (refreshToken) {
      dispatch(logoutUser(refreshToken));
    }
    navigate('/login');
  }, []);

  return (
    <div>Logout</div>
  );
}

export default LogoutPage;
