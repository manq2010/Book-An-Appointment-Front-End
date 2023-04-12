import React from 'react';
import { useMediaQuery } from '@mui/material';
import Layout from '../layout/Layout';
import ReservationForm from '../features/Reservation/ReservationForm';

const ReservationsPage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile ? (
        <Layout>
          <main>
            <ReservationForm />
          </main>
        </Layout>
      ) : (
        <ReservationForm />
      )}
    </>
  );
};

export default ReservationsPage;
