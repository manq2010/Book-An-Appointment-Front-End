import React from 'react';
import PropTypes from 'prop-types';
// import Footer from '../components/Footer';
import Sidebar from '../features/Sidebar/sidebar';
import Navbar from '../features/Navbar/navbar';

const Layout = ({ children }) => (
  <div id="content">
    <Sidebar />
    <Navbar />
    {children}
    {/* <Footer /> */}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;