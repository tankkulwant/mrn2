import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink exact to="/" className="nav-link" activeClassName="active-link">
          <div className="nav-item">
            <img src="/homelogo.png" alt="Home" className="nav-icon" />
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink to="/explore" className="nav-link" activeClassName="active-link">
          <div className="nav-item">
            <img src="/explore.png" alt="Explore" className="nav-icon" />
            <span>Explore</span>
          </div>
        </NavLink>
        <NavLink to="/networking" className="nav-link" activeClassName="active-link">
          <div className="nav-item">
            <img src="/networking.png" alt="Networking" className="nav-icon" />
            <span>Networking</span>
          </div>
        </NavLink>
        <NavLink to="/inbox" className="nav-link" activeClassName="active-link">
          <div className="nav-item">
            <img src="/inbox.png" alt="Inbox" className="nav-icon" />
            <span>Inbox</span>
          </div>
        </NavLink>
        <NavLink to="/notifications" className="nav-link" activeClassName="active-link">
          <div className="nav-item">
            <img src="/notification.png" alt="Notifications" className="nav-icon" />
            <span>Notifications</span>
          </div>
        </NavLink>
      </div>
      <div className="navbar-center">
        <img src="/MeetMyMate_120x120.png" alt="Logo" />
      </div>
      <div className="navbar-right">
        <input type="text" className="search-bar" placeholder="Search" />
        <NavLink exact to="/" className="nav-link" activeClassName="active-link">
          <div className="nav-item">
            <img src="/profile-user.png" alt="Home" className="nav-icon" />
            <span>Profile</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
