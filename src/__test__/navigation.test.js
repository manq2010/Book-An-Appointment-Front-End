import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Sidebar from '../features/Sidebar/sidebar';

const mockStore = configureMockStore();
const store = mockStore({
  session: {
  // provide a mock value for currentUser
    currentUser: { role: 'admin' },
  },
});

describe('Sidebar component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>,
    );
  });

  test('renders logo', () => {
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    const classesLink = screen.getByTestId('Classes');
    expect(classesLink).toBeInTheDocument();
  });
  test('renders navigation links', () => {
    const showReservationsLink = screen.getByTestId('Show Reservations');
    expect(showReservationsLink).toBeInTheDocument();
  });
  test('renders navigation links', () => {
    const addReservationsLink = screen.getByTestId('Add Reservations');
    expect(addReservationsLink).toBeInTheDocument();
  });

  test('renders logout link', () => {
    const logoutLink = screen.getByTestId('Logout');
    expect(logoutLink).toBeInTheDocument();
  });
});
