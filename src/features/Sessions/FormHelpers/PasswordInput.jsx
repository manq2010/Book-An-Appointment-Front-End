import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function PasswordInput({ inputRef, type }) {
  const [showPassword, setShowPassword] = useState(false);
  return (

    <OutlinedInput
      id={type}
      type={showPassword ? 'text' : 'password'}
      inputRef={inputRef}
      color="success"
      sx={{
        borderBottom: '1px solid grey',
        '&:hover': {
          borderBottom: '1px solid black',
        },
        '&:focus-within': {
          borderBottom: '2px solid green',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
      endAdornment={(
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            onMouseDown={() => setShowPassword(!showPassword)}
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
  )}
    />
  );
}

PasswordInput.propTypes = {
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element).isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default PasswordInput;
