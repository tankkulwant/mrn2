import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <button
            className="mobile-menu-button md:hidden"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="active-link"
            >
              <div className="nav-item">
                <img src="/homelogo.png" alt="Home" className="nav-icon" />
                <span>Home</span>
              </div>
            </NavLink>
            <NavLink
              to="/explore"
              className="nav-link"
              activeClassName="active-link"
            >
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
            {/* Add other menu items similarly */}
          </div>
        </div>

        <div className="navbar-center">
          <img src="/MeetMyMate_120x120.png" alt="Logo" />
        </div>

        <div className="navbar-right">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
          />
          <NavLink
            exact
            to="/profileview"
            className="nav-link"
            activeClassName="active-link"
          >
            <div className="nav-item">
              <img
                src="/profile-user.png"
                alt="Profile"
                className="nav-icon"
              />
              <span>Profile</span>
            </div>
          </NavLink>
        </div>
      </nav>

      {/* Background Overlay */}
      {isDrawerOpen && (
        <div
          className="overlay"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`drawer ${
          isDrawerOpen ? "open" : "closed"
        }`}
      >
        <button
          className="close-button"
          onClick={() => setIsDrawerOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="drawer-content">
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
      </div>
    </>
  );
};

export default Navbar;
