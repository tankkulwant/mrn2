import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const WelcomeNav = ({ onSignUp }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        
        <NavLink to="/explore" className="nav-link" activeClassName="active-link">
          <div className="nav-item">
      
            <span>Explore</span>
          </div>
        </NavLink>
       
        <NavLink to="/inbox" className="nav-link" activeClassName="active-link">
          <div className="nav-item">
           
            <span>FAQ</span>
          </div>
        </NavLink>
        <NavLink to="/notifications" className="nav-link" activeClassName="active-link">
          <div className="nav-item">
           
            <span>About Us</span>
          </div>
        </NavLink>
        <span className="nav-link" onClick={onSignUp}>
          <div className="nav-item">
            <span>Sign In</span>
          </div>
        </span>
      </div>
      <div className="navbar-center">
        <img src="/MeetMyMate_120x120.png" alt="Logo" />
      </div>
      <div className="navbar-right">

      <span className="nav-link" onClick={onSignUp}>
          <div className="nav-item">
            <span>Sign Up</span>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default WelcomeNav;
