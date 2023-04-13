/* eslint-disable camelcase */
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      <button
        type="button"
        className="btn border border-white border-2 bg-white px-4 py-2 mt-2 text-center
"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
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
      rgba(46, 165, 65, 0.9) 0%
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

  h3 {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
    color: black; 
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  h4 {
    font-family: 'Poppins', sans-serif;
    text-align: center;

  }
  .slogan-text {
    padding: 3rem;
  }
  .my-hr {
    border: none;
    border-top: 5px solid white;
    margin: 10px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    .nav-button {
      display: none;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;

  .text-field{
    border:none;
    background: white;
    border-radius: 5px;
  }

  .reserve-btn {
    display: flex;
    justify-content: center;
    align-item: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const ReservationForm = ({ class: classProp } = {}) => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.mainReducer.classes);
  const currentUser = useSelector((state) => state.session.currentUser);
  const accessToken = useSelector((state) => state.session.accessToken);
  let currentClass;
  if (classProp) {
    currentClass = classes.find((item) => item.id.toString() === classProp);
  }

  const [values, setValues] = useState({
    date: '',
    city: '',
    item_id: '',
  });
  const navigate = useNavigate();

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
        await dispatch(addReservation(reservation));
        setValues({
          date: '',
          city: '',
          item_id: '',
        });
        navigate('/reservation');
      }
    },
    [values, dispatch, accessToken, navigate],
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
          <button
            type="button"
            className=" btn btn border border-white border-2 bg-white px-4 py-2 mt-2 text-center"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="slogan-text">
        <h3>
          Hello
          {' '}
          {currentUser.username}
        </h3>
        <hr className="my-hr" />
        <h3>
          Our platform is a ideal Place where Learners can find and hire
          experienced mentors to learn coding.
        </h3>
      </div>
      <h4>Reserve Your Class Today!</h4>

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <TextField
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            margin="normal"
            fullWidth
            required
            className="text-field"
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
            className="text-field"
          />
          <FormControl
            className="text-field"
            fullWidth
            margin="normal"
            required
          >
            <InputLabel id="class-label">Select a class</InputLabel>
            <Select
              labelId="class-label"
              name="item_id"
              value={values.item_id}
              onChange={handleChange}
            >
              {currentClass ? (
                <MenuItem key={currentClass.id} value={currentClass.id}>
                  {currentClass.name}
                </MenuItem>
              ) : (
                [
                  <MenuItem key="" value="">
                    Select a class
                  </MenuItem>,
                  ...classes.map((classItem) => (
                    <MenuItem key={classItem.id} value={classItem.id}>
                      {classItem.name}
                    </MenuItem>
                  )),
                ]
              )}
            </Select>

          </FormControl>
          <div className="reserve-btn">
            <Button variant="contained" color="success" type="submit">
              Reserve
            </Button>
          </div>
        </form>
      </FormContainer>
    </Section>
  );
};

ReservationForm.defaultProps = {
  class: null,
};
ReservationForm.propTypes = {
  class: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default ReservationForm;
