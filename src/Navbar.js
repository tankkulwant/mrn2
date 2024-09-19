import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="nav-link">Home</a>
        <a href="/explore" className="nav-link">Explore</a>
        <a href="/networking" className="nav-link">Networking</a>
        <a href="/inbox" className="nav-link">Inbox</a>
        <a href="/notifications" className="nav-link">Notifications</a>
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