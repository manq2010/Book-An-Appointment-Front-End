import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import ReservationForm from '../features/Reservation/ReservationForm';

const ReservationsPage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { id } = useParams();

  return (
    <>
      {isMobile ? (
        <Layout>
          <main>
            {id ? <ReservationForm class={id} /> : <ReservationForm />}
          </main>
        </Layout>
      ) : (
        <main>
          {id ? <ReservationForm class={id} /> : <ReservationForm />}
        </main>
      )}
    </>
  );
};

export default ReservationsPage;
