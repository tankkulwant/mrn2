import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink exact to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
        <NavLink to="/explore" className="nav-link" activeClassName="active-link">Explore</NavLink>
        <NavLink to="/networking" className="nav-link" activeClassName="active-link">Networking</NavLink>
        <NavLink to="/inbox" className="nav-link" activeClassName="active-link">Inbox</NavLink>
        <NavLink to="/recruitments" className="nav-link" activeClassName="active-link">Recruitments</NavLink>
        <NavLink to="/notifications" className="nav-link" activeClassName="active-link">Notifications</NavLink>
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
