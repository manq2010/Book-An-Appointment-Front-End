import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  FormControl, FormGroup, InputLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetErrorState } from '../sessionSlice';
import PasswordInput from '../FormHelpers/PasswordInput';
import EmailInput from '../FormHelpers/EmailInput';
import ErrorMessage from '../FormHelpers/ErrorMessage';

function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const loading = false;
  const [errors, setErrors] = useState([]);
  const errorMessages = useSelector((state) => state.session.errorMessages);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    emailRef?.current?.focus();
    if (errorMessages.length > 0) {
      setErrors(errorMessages);
      dispatch(resetErrorState());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line consistent-return
  async function handleSubmit(event) {
    event.preventDefault();
    setErrors([]);
    if (emailRef?.current === undefined
    || emailRef.current.value === ''
    || passwordRef?.current === undefined
    || passwordRef.current.value === '') {
      return setErrors(['Please fill out all fields']);
    }
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    await dispatch(loginUser(payload));
    if (errorMessages.length === 0) {
      navigate('/');
    } else {
      setErrors(errorMessages);
    }
  }

  return (
    <>
      {errors.length > 0
        ? (
          <ErrorMessage errors={errors} />
        )
        : <></>}
      <form onSubmit={handleSubmit}>
        <FormGroup row id="email-group" sx={{ marginTop: '1em' }}>
          <FormControl fullWidth>
            <InputLabel required htmlFor="email" id="email-label">Email Address</InputLabel>
            <EmailInput inputRef={emailRef} />
          </FormControl>
        </FormGroup>
        <FormGroup row id="password-group" sx={{ marginTop: '1em' }}>
          <FormControl fullWidth>
            <InputLabel required htmlFor="password" id="password-label">Password</InputLabel>
            <PasswordInput inputRef={passwordRef} type="password" />
          </FormControl>
        </FormGroup>
        <FormGroup row id="submit-group" sx={{ marginTop: '1em' }}>
          <FormControl fullWidth>
            <Button
              disabled={loading}
              variant="contained"
              color="primary"
              type="submit"
              id="submit-button"
            >
              Login

            </Button>
          </FormControl>
        </FormGroup>
      </form>
    </>
  );
}

export default LoginForm;
