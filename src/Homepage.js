import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut  } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './Homepage.css'

import Navbar from './Navbar';
import SomeOtherComponent from './SomeOtherComponent';


const MainPage = () => {
  return (
    <div className="main-page">
      {/* User Profile Section */}
      <section className="profile-section">
        <h2><b>Welcome, [User Name]</b></h2>
        <p>Role: [Founder / Entrepreneur]</p>
        <p>Followers: 120 | Startups: 3</p>
        <Link to="/profile">Edit Profile</Link>
      </section>

      {/* Recent Activity Section */}
      <section className="activity-section">
        <h3 ><b>Recent Activity</b></h3>
        <ul>
          <li>User X joined Startup Y</li>
          <li>New Event: Pitch Deck Workshop</li>
          <li>Startup Z raised $1M in funding!</li>
        </ul>
        <Link to="/activity">View All</Link>
      </section>

      {/* Explore Startups / Entrepreneurs Section */}
      <section className="explore-section">
        <h3><b>Explore Startups & Entrepreneurs</b></h3>
        <div className="explore-grid">
          {/* You can map over a list of startups/entrepreneurs */}
          <div className="explore-card">
            <h4>Startup A</h4>
            <p>By: Entrepreneur X</p>
            <Link to="/startup/a">View Details</Link>
          </div>
          <div className="explore-card">
            <h4>Startup B</h4>
            <p>By: Entrepreneur Y</p>
            <Link to="/startup/b">View Details</Link>
          </div>
        </div>
      </section>

      {/* Networking Opportunities */}
      <section className="networking-section">
        <h3><b>Networking Opportunities</b></h3>
        <p>You have 3 new invitations to connect.</p>
        <Link to="/networking">View Invitations</Link>
      </section>

      {/* Notifications Section */}
      <section className="notifications-section">
        <h3><b>Notifications</b></h3>
        <ul>
          <li>Reminder: Startup Pitch Event in 3 days</li>
          <li>You have been invited to collaborate on Startup C</li>
        </ul>
        <Link to="/notifications">See All</Link>
      </section>
    </div>
  );
};

const LogoutButton = () => {
    const auth = getAuth();
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        toast.success('You have been logged out successfully.');
      } catch (error) {
        toast.error('Error logging out: ' + error.message);
      }
    };
  
    return (
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    );
  };

const Homepage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        toast.error("You need to be logged in to access this page.");
        navigate('/welcome'); // Redirect to the Welcome page or another appropriate page
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <LogoutButton />
      <MainPage />
      <SomeOtherComponent />
      {/* Add more content here if needed */}
    </div>
  );
};

export default Homepage;
