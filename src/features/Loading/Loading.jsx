import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Logo = styled.img`
  animation: ${fadeInOut} 1s linear infinite;
`;

function Loading({ isLoading }) {
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Logo src={logo} alt="logo" />
        </LoadingContainer>
      )}
    </>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
