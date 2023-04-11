import React from 'react';
import Layout from '../layout/Layout';
import ReservationForm from '../features/Reservation/ReservationForm';

const ReservationsPage = () => (
  <Layout>
    <main>
      <h1>
        <ReservationForm />
      </h1>
    </main>
  </Layout>
);

export default ReservationsPage;
