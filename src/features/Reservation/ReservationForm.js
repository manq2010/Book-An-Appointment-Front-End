/* eslint-disable camelcase */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from './reservationSlice';

const Section = styled.section`
  /* Styles here */
`;

const ReservationForm = ({ classId }) => {
  const accessToken = useSelector((state) => state.session.accessToken);
  const classes = useSelector((state) => state.addClassesReducer.classes);
  const currentUser = useSelector((state) => state.session.currentUser);

  const [values, setValues] = useState({
    date: '',
    city: '',
    item_id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { date, city, item_id } = values;
      if (date && city && item_id) {
        const reservation = {
          date,
          city,
          item_id: classId,
          user_id: currentUser.id,
          accessToken,
        };
        await dispatch(addReservation(reservation));
        setValues({
          date: '',
          city: '',
          item_id: '',
        });
      }
    },
    [values, accessToken, classId, currentUser.id, dispatch],
  );

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            name="username"
            value={currentUser.username}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="date">Date:</label> */}
          <input
            type="date"
            className="form-control"
            name="date"
            value={values.date}
            required
            onChange={handleChange}
            id="date"
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="city">City:</label> */}
          <input
            type="text"
            className="form-control"
            name="city"
            value={values.city}
            required
            onChange={handleChange}
            id="city"
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="item_id">Select a class:</label> */}
          <select
            className="form-control"
            name="item_id"
            value={values.item_id}
            onChange={handleChange}
            id="item_id"
            required
          >
            <option value="">Select a class</option>
            {classes.map((classItem) => (
              <option key={classItem.id} value={classItem.id}>
                {classItem.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Reserve
        </button>
      </form>
    </Section>
  );
};

ReservationForm.propTypes = {
  classId: PropTypes.number.isRequired,
};

export default ReservationForm;
