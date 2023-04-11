/* eslint-disable camelcase */
import React, { useState, useCallback } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { addReservation } from './reservationSlice';

const Section = styled.section`
  /* Styles here */
`;

const ReservationForm = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.addClassesReducer.classes);
  const currentUser = useSelector((state) => state.session.currentUser);
  const accessToken = useSelector((state) => state.session.accessToken);

  const [values, setValues] = useState({
    date: '',
    city: '',
    item_id: '',
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { date, city, item_id } = values;
      if (date && city && item_id) {
        const reservation = {
          date,
          city,
          item_id,
          accessToken,
        };
        console.log(reservation);
        await dispatch(addReservation(reservation));
        setValues({
          date: '',
          city: '',
          item_id: '',
        });
      }
    },
    [values, dispatch, accessToken],
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={currentUser.username}
          InputProps={{ readOnly: true }}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Date"
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="City"
          type="text"
          name="city"
          value={values.city}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="class-label">Select a class</InputLabel>
          <Select
            labelId="class-label"
            name="item_id"
            value={values.item_id}
            onChange={handleChange}
          >
            <MenuItem value="">Select a class</MenuItem>
            {classes.map((classItem) => (
              <MenuItem key={classItem.id} value={classItem.id}>
                {classItem.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Reserve
        </Button>
      </form>
    </Section>
  );
};

// ReservationForm.propTypes = {
//   // eslint-disable-next-line react/require-default-props, react/no-typos
//   classId: PropTypes.number.Optional,
// };

export default ReservationForm;
