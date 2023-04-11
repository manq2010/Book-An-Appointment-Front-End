import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from './reservationSlice';

const Section = styled.section`
  /* Styles here */
`;

const ReservedClasses = () => {
  const accessToken = useSelector((state) => state.session.accessToken);
  const reservations = useSelector((state) => state.reservations.reservations);
  const reservationsStatus = useSelector((state) => state.reservations.status);
  const error = useSelector((state) => state.reservations.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchReservations(accessToken));
    }
  }, [accessToken, dispatch]);

  let content;

  if (reservationsStatus === 'loading') {
    content = <p>Loading reservations...</p>;
  } else if (reservationsStatus === 'succeeded') {
    content = reservations.length > 0 ? (
      <>
        <h3 className="item-heading">My Reservations</h3>
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.class_name}</td>
                <td>{reservation.date}</td>
                <td>{reservation.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ) : (
      <p>You have no reservations yet.</p>
    );
  } else if (reservationsStatus === 'failed') {
    content = (
      <>
        <h1>Reservations not found</h1>
        <p>{error}</p>
      </>
    );
  }

  return <Section>{content}</Section>;
};

export default ReservedClasses;
