import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row, Col, Button,
} from 'react-bootstrap';
import { fetchReservations } from './reservationSlice';
import { fetchClasses } from '../AddClasses/addClassesSlice';

const Section = styled.section`
  #card-wrap {
    text-align: center;
  }
  #card-wrap .container {
    padding-top: 80px;
    padding-bottom: 100px;
  }
  #card-wrap a {
    text-decoration: none;
    outline: none;
  }
  #card-wrap .card-container {
    border-radius: 5px;
  }
  #card-wrap .card-container .image-container {
    background: #ffffff;
    overflow: hidden;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  #card-wrap .card-container .image-container img {
    -webkit-transition: all 0.9s ease;
    -moz-transition: all 0.9s ease;
    -o-transition: all 0.9s ease;
    -ms-transition: all 0.9s ease;
    width: 100%;
    height: 200px;
  }
  #card-wrap .card-container:hover .image-container img {
    opacity: 0.7;
    -webkit-transform: scale(1.15);
    -moz-transform: scale(1.15);
    -ms-transform: scale(1.15);
    -o-transform: scale(1.15);
    transform: scale(1.15);
  }
  #card-wrap .card-container .card-box {
    text-align: center;
  }
  #card-wrap .card-container .card-box .text-container {
    padding: 30px 18px;
  }
  #card-wrap .card-container {
    background: #ffffff;
    margin-top: 50px;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
  }
  #card-wrap .card-container:hover {
    background: #fff;
    box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.5);
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    margin-top: 50px;
  }
  #card-wrap .card-container .card-box p {
    margin-top: 10px;
    margin-bottom: 0px;
    padding-bottom: 0px;
    font-size: 14px;
    letter-spacing: 1px;
    color: #000000;
  }
  #card-wrap .card-container .card-box h6 {
    margin-top: 0px;
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Roboto Black', sans-serif;
    letter-spacing: 1px;
    color: #00acc1;
  }

  p:lastchild{
    text-align: right;
  }
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
        <section>
          <div id="card-wrap">
            <div className="container">
              <Row xs={1} md={2}>
                {reservations.map((reservation) => {
                  const classItem = classItems.find(
                    (item) => item.id === reservation.item_id,
                  );
                  if (classItem) {
                    return (
                      <Col className="mb-4" key={reservation.id}>
                        <div className="card-container">
                          <Link to={`/class/${classItem.id}`}>
                            <div className="card-box">
                              <div className="image-container">
                                <img
                                  src={
                                    classItem.photo
                                      ? classItem.photo
                                      : 'https://placeholder.com/placeholder.jpg'
                                  }
                                  alt={classItem.name}
                                />
                              </div>
                              <div className="text-container">
                                <h3>{classItem.name}</h3>
                                <p>
                                  About The Class:
                                  {' '}
                                  {classItem.description.slice(0, 40)}
                                  ...
                                </p>
                                <p>
                                  Price:
                                  {' '}
                                  {classItem.price}
                                </p>
                                <p>
                                  Mentor Name:
                                  {' '}
                                  {classItem.mentor_name}
                                </p>
                                <p>
                                  Duration:
                                  {' '}
                                  {classItem.duration}
                                </p>
                                <p>
                                  Date:
                                  {' '}
                                  {reservation.date}
                                </p>
                                <p>
                                  City:
                                  {' '}
                                  {reservation.city}
                                </p>
                                <div className="d-flex justify-content-center mt-3">
                                  <Button className="btn btn-danger">
                                    Remove Reservation
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Col>
                    );
                  }
                  return null;
                })}
              </Row>
            </div>
          </div>
        </section>
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
