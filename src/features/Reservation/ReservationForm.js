import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

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

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
    </>
  );
};

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 50px;
  background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(2, 251, 43, 0.6167060574229692) 0%
    ),
    url('https://miro.medium.com/v2/resize:fit:10204/0*FZtDbymV965OvyZC.jpg')
      no-repeat;
  background-size: cover;
  background-position: center;

  .nav-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    .nav-button {
      display: none;
    }
  }
`;

const FormContainer = styled.div`
  margin: 0 auto;
  padding: 50px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
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
      <div className="nav-button">
        <BackButton />
        <div
          data-testid="Logout"
          to="/logout"
          rel="noreferrer"
          className="link-item"
        >
          <button type="button" className=" btn btn-primary links-details">
            Logout
          </button>
        </div>
      </div>
      <h3>
        Our platform is a ideal Place where Learners can find and hire
        experienced mentors to learn coding.
      </h3>
      <FormContainer>
        <h4>Reserve Your Class Today!</h4>
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
      </FormContainer>
    </Section>
  );
};

// ReservationForm.propTypes = {
//   // eslint-disable-next-line react/require-default-props, react/no-typos
//   classId: PropTypes.number.Optional,
// };

export default ReservationForm;
