import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: "url('https://source.unsplash.com/random/8')" }}>
    <Link to="/">Home</Link>
    <Link to="/call">Call</Link>
    <Link to="/about">About</Link>

    <main>{children}</main>
  </div>
);
Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default Layout;
