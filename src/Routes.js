import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './features/Navbar/navbar';

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

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/details/:symbol" element={<DetailsPage />} />
      <Route exact path="/reservation" element={<ReservationPage />} />
      <Route exact path="/reservations" element={<ReservationsPage />} />
      <Route exact path="/add-classes" element={<AddClassesPage />} />
      <Route exact path="/remove-classes" element={<RemoveClassesPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/sign-up" element={<SignUpPage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
