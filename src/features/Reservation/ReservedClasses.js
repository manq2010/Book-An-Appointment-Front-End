import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import { fetchReservations } from './reservationSlice';
import { fetchClasses } from '../AddClasses/addClassesSlice';

const Section = styled.section`
  /* Styles here */
`;

const ReservedClasses = () => {
  const accessToken = useSelector((state) => state.session.accessToken);
  const classItems = useSelector((state) => state.addClassesReducer.classes);
  const classesStatus = useSelector((state) => state.addClassesReducer.status);

  // Prepare Redux dispatch method:
  const dispatch = useDispatch();

  useEffect(() => {
    if (classesStatus === 'idle') {
      dispatch(fetchClasses(accessToken));
    }
  }, [classesStatus, dispatch]);
  const reservations = useSelector(
    (state) => state.reservationReducer.reservations,
  );
  const reservationsStatus = useSelector(
    (state) => state.reservationReducer.status,
  );
  const error = useSelector((state) => state.reservationReducer.error);

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
          {reservations.map((reservation) => {
            const classItem = classItems.find(
              (item) => item.id === reservation.item_id,
            );
            if (classItem) {
              return (
                <Col md={4} key={reservation.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{classItem.name}</Card.Title>
                      <Card.Text>
                        Description:
                        {' '}
                        {classItem.description}
                      </Card.Text>
                      <Card.Text>
                        Price:
                        {' '}
                        {classItem.price}
                      </Card.Text>
                      <Card.Text>
                        Mentor Name:
                        {' '}
                        {classItem.mentor_name}
                      </Card.Text>
                      <Card.Text>
                        Duration:
                        {' '}
                        {classItem.duration}
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
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
            return null;
          })}
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
