import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

function ErrorMessage({ errors }) {
  if (errors.length === 0) {
    return null;
  }
  return (
    <Alert severity="error" aria-live="assertive">
      {errors.map((error) => (
        <p key={`alert-${error}`}>
          {error}
        </p>
      ))}
    </Alert>
  );
}

ErrorMessage.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ErrorMessage;
