import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import { fetchReservations } from './reservationSlice';

const Section = styled.section`
  /* Styles here */
`;

const ReservedClasses = () => {
  const accessToken = useSelector((state) => state.session.accessToken);
  const reservations = useSelector(
    (state) => state.reservationReducer.reservations,
  );
  const reservationsStatus = useSelector(
    (state) => state.reservationReducer.status,
  );
  const error = useSelector((state) => state.reservationReducer.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations(accessToken));
  }, []);

  let content;

  if (reservationsStatus === 'loading') {
    content = <p>Loading reservations...</p>;
  } else if (reservationsStatus === 'succeeded') {
    content = reservations.length > 0 ? (
      <>
        <h3 className="item-heading">My Reservations</h3>
        <Row>
          {reservations.map((reservation) => (
            <Col md={4} key={reservation.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{reservation.class_name}</Card.Title>
                  <Card.Text>
                    Description:
                    {' '}
                    {reservation.description}
                  </Card.Text>
                  <Card.Text>
                    Price:
                    {' '}
                    {reservation.price}
                  </Card.Text>
                  <Card.Text>
                    Mentor Name:
                    {' '}
                    {reservation.mentor_name}
                  </Card.Text>
                  <Card.Text>
                    Duration:
                    {' '}
                    {reservation.duration}
                  </Card.Text>
                  <Card.Text>
                    Date:
                    {' '}
                    {reservation.date}
                  </Card.Text>
                  <Card.Text>
                    City:
                    {' '}
                    {reservation.city}
                  </Card.Text>
                  <Card.Text>
                    Time:
                    {' '}
                    {reservation.time}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
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
