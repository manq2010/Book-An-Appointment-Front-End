/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Input } from '@mui/material';
import PropTypes from 'prop-types';

function EmailInput({ inputRef }) {
  return (
    <Input id="email" type="email" color="success" inputRef={inputRef} />
  );
}

EmailInput.propTypes = {
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element).isRequired,
  }).isRequired,
};

export default EmailInput;
