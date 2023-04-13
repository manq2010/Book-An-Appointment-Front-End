import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: var(--tertiary-light);
  left: ${(props) => (props.orientation === 'left' ? '0' : 'auto')};
  transition: left 0.3s ease-in-out;
  background-color: white;
  z-index: 5;

  @media screen and (min-width: 768px) {
    background-color: white;
    width: 200px;
    left: -100%;
    left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
    z-index: 1;
  }
  
  @media screen and (min-width: 1080px) {
    background-color: white;
    left: ${(props) => (props.orientation === 'left' ? '80px' : 'auto')};
    z-index: 1;
  }
`;

const Hamburger = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 6;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: black;
    border-radius: 9px;
    left: -20px;
    transform: rotate(0deg);
    transition: all 0.25s ease-out;
  }

  span:nth-child(1) {
    top: ${(props) => (props.isMobileNavOpen ? '10px' : '2px')};
    transform-origin: left center;
  }

  span:nth-child(2) {
    top: 10px;
    opacity: ${(props) => (props.isMobileNavOpen ? '0' : '1')};
  }

  span:nth-child(3) {
    top: ${(props) => (props.isMobileNavOpen ? '10px' : '18px')};
    transform-origin: left center;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Side = ({ children, orientation }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileNavOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Hamburger onClick={handleMobileNavToggle} isMobileNavOpen={isMobileNavOpen}>
        <span />
        <span />
        <span />
      </Hamburger>
      <SideBarWrapper orientation={orientation} style={{ left: isMobileNavOpen || window.innerWidth >= 768 ? 0 : '-200%' }}>
        {children}
      </SideBarWrapper>
    </>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string.isRequired,
};

export default Side;
