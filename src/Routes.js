import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import ReservationPage from './pages/ReservationPage';
import ReservationsPage from './pages/ReservationsPage';
import AddClassesPage from './pages/AddClassesPage';
import RemoveClassesPage from './pages/RemoveClassesPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LogoutPage from './pages/LogoutPage';
import PersistLogin from './features/Sessions/PersistLogin/PersistLogin';
import PrivateRoute from './features/Routes/PrivateRoute';
import PublicOnlyRoute from './features/Routes/PublicOnlyRoute';
import AdminOnlyRoute from './features/Routes/AdminOnlyRoute';

const AppRoutes = () => (
  <Routes>
    <Route element={<PersistLogin />}>
      <Route exact path="/" element={<PrivateRoute><MainPage /></PrivateRoute>} />
      <Route exact path="/class/:id" element={<PrivateRoute><DetailsPage /></PrivateRoute>} />
      <Route exact path="/reservation" element={<PrivateRoute><ReservationPage /></PrivateRoute>} />
      <Route exact path="/reservations" element={<PrivateRoute><ReservationsPage /></PrivateRoute>} />
      <Route exact path="/add-classes" element={<AdminOnlyRoute><AddClassesPage /></AdminOnlyRoute>} />
      <Route exact path="/remove-classes" element={<AdminOnlyRoute><RemoveClassesPage /></AdminOnlyRoute>} />
      <Route exact path="/login" element={<PublicOnlyRoute><LoginPage /></PublicOnlyRoute>} />
      <Route exact path="/sign-up" element={<PublicOnlyRoute><SignUpPage /></PublicOnlyRoute>} />
      <Route exact path="/logout" element={<PrivateRoute><LogoutPage /></PrivateRoute>} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
