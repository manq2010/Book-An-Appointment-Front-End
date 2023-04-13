import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../features/Sidebar/sidebar';

const Layout = ({ children }) => (
  <div id="content">
    <Sidebar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
