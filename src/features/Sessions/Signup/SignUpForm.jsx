import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  FormControl, FormGroup, InputLabel, Input,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, resetErrorState } from '../sessionSlice';
import PasswordInput from '../FormHelpers/PasswordInput';
import EmailInput from '../FormHelpers/EmailInput';
import ErrorMessage from '../FormHelpers/ErrorMessage';

function SignUpForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const usernameRef = useRef();
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
      || passwordRef.current.value === ''
      || passwordConfirmationRef?.current === undefined
      || passwordConfirmationRef.current.value === '') {
      return setErrors(['Please fill out all fields']);
    }
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setErrors(['Passwords do not match']);
    }
    const payload = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    await dispatch(signUpUser(payload));
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
        <FormGroup row id="username-group" sx={{ marginTop: '1em' }}>
          <FormControl fullWidth>
            <InputLabel required htmlFor="username" id="username-label">Username</InputLabel>
            <Input id="username" type="text" inputRef={usernameRef} />
          </FormControl>
        </FormGroup>
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
        <FormGroup row id="password-confirmation-group" sx={{ marginTop: '1em' }}>
          <FormControl fullWidth>
            <InputLabel required htmlFor="password-confirmation" id="password-confirmation-label">Password Confirmation</InputLabel>
            <PasswordInput inputRef={passwordConfirmationRef} type="password-confirmation" />
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

export default SignUpForm;
