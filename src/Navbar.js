import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="nav-link">Explore</a>
        <a href="/" className="nav-link">Services</a>
        <a href="/" className="nav-link">Blogs</a>
        <a href="/" className="nav-link">About Us</a>
      </div>
      <div className="navbar-center">
        <img src="/meetmymatelogo.jpg" alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <input type="text" className="search-bar" placeholder="Search" />
        <img src="/path/to/profile-pic.png" alt="Profile" className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
