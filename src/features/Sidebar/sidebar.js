import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Side from './side';

const SideWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-right: 1px solid grey;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100vh;

  li {
    margin-right: 10px;
    padding: 10px;
    font-size: 18px;
    /* font-family: ; */
    line-height: 17px

/*     
    &:last-of-type {
        margin-bottom: 10px;
    } */
    
    &:hover {
      transform: translateX(-3px);
    }

    .links-details {
        display: inline-block;
    }
  
    .link-item{
      &:hover,
      &:focus {
        transform: translateX(-3px);
      }
    }
  }

`;

const Sidebar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Classes',
    },
    {
      id: 2,
      path: '/reservation',
      text: 'Add Reservation',
    },
    {
      id: 3,
      path: '/reservations',
      text: 'Reservations',
    },
    {
      id: 4,
      path: '/add-classes',
      text: 'Add Classes',
    },
    {
      id: 5,
      path: '/remove-classes',
      text: 'Remove Classes',
    },
  ];

  const content = (
    <>
      {links
  && links.map((link) => (
    <li key={link.id}>
      <Link
        to={link.path}
        aria-label={link.text}
        rel="noreferrer"
        className="link-item"
      >
        <span className="links-details">
          {link.text}
        </span>
      </Link>
    </li>
  ))}
    </>
  );

  return (
    <Side orientation="left">
      <SideWrapper>
        {content}
      </SideWrapper>
    </Side>
  );
};

export default Sidebar;
