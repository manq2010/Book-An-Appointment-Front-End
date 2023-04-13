import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import Side from './side';

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const SideWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 1rem;
  height: 30vh;
  z-index: 2;
  li {
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    line-height: 17px;
    list-style: none;
    transition: all 0.2s ease;

    &:hover {
    background-color: var(--tertiary);
    transform: translateX(-2px);
    border-radius: 0.2rem;
  }

    .links-details {
        display: inline-block;
        width: 100%;
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
      text: 'Show Reservations',
    },
    {
      id: 3,
      path: '/reservations',
      text: 'Add Reservations',
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
    padding: isActive ? '8px' : '0',
    borderRadius: isActive ? '0.2rem' : '0',
    transition: 'all 0.2s ease',
  });
  const userRole = useSelector((state) => state.session.currentUser.role);
  const content = links
    .filter((link) => {
      if (link.text === 'Add Classes' || link.text === 'Remove Classes') {
        return userRole === 'admin';
      }
      return true;
    })
    .map((link) => (
      <li key={link.id}>
        <NavLink
          style={navLinkStyles}
          data-testid={link.text}
          to={link.path}
          rel="noreferrer"
          className="link-item"
        >
          <span className="links-details">{link.text}</span>
        </NavLink>
      </li>
    ));

  const LogoutLink = styled(NavLink)`
  margin-top: 20%;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  width: 100%;
  align-items: flex-end;
  background-color: var(--secondary);
  color: var(--white);
  padding: 0.5rem;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    background-color: var(--tertiary);
    color: var(--white);
    transform: translateY(-2px);
  }
`;

  const SocialLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 30vh;
  transition: all 0.2s ease;

  li {
    padding: 10px;
    display: flex;
    a {
      i {
        color: rgb(66,66,66);
      }
    }

    &:hover {
    transform: translateY(-2px);
    a {
      i {
        color: green;
      }
    }
  }

    .links-details {
        display: inline-block;
        width: 9rem;
    }
  }
`;
  return (
    <Side orientation="left">
      <Logo src={logo} alt="logo" />
      <SideWrapper>
        {content}
      </SideWrapper>

      <LogoutLink
        data-testid="Logout"
        to="/logout"
        rel="noreferrer"
        className="link-item"
      >
        <span className="links-details">
          Logout
        </span>
      </LogoutLink>
      <SocialLinks>
        <li>
          <a href="https://github.com/manq2010/Book-An-Appointment-Front-End">
            <i className="fa-brands fa-github" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
      </SocialLinks>
    </Side>
  );
};

export default Sidebar;
