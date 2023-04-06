import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Side from './side';

const SideWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-right: 1px solid var(--secondary);
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100vh;

  li {
    padding: 10px;
    font-size: 18px;
    line-height: 17px
    list-style: none;

    .links-details {
        display: inline-block;
        width: 9rem;
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

  const navLinkStyles = ({ isActive }) => ({
    // fontWeight: isActive ? 'bold' : 'bold',
    color: isActive ? 'var(--white)' : 'var(--secondary)',
    backgroundColor: isActive ? 'var(--tertiary)' : '',
    padding: isActive ? '0.5rem' : '0',
    // borderRadius: isActive ? '0.2rem' : '0',
    // width: isActive ? '3rem' : '0',
  });

  const content = (
    <>
      {links
  && links.map((link) => (
    <li key={link.id}>
      <NavLink
        style={navLinkStyles}
        data-testid={link.text}
        to={link.path}
        rel="noreferrer"
        className="link-item"
      >
        <span className="links-details">
          {link.text}
        </span>
      </NavLink>
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
