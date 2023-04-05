import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function PasswordInput({ inputRef }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <OutlinedInput
      id="password"
      type={showPassword ? 'text' : 'password'}
      inputRef={inputRef}
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
};

export default PasswordInput;
