import React, { useState } from 'react';
import Navbar from './Navbar';
import Register from './Register';
import ProfileForm from './ProfileForm'; // Import the ProfileForm component
import QuoteCard from './QuoteCard';
import './App.css';

// Header Component
const Header = ({ onGetStarted }) => (
  <header className="header">
    <Navbar />
  </header>
);

// Hero Section Component
const HeroSection = ({ onGetStarted }) => (
  <section className="hero-section">
    {/* Add your hero section content here */}
  </section>
);

// Main Content Component
const MainContent = ({ onSignUp }) => (
  <main className="main-content">
    <section className="features" id="features">
      <h2 className="section-title">Features</h2>
      <div className="feature-list">
        <div className="feature">
          <h3>Real-time Chat</h3>
          <img src="/SlideOne.jpg" alt="SlideOne" />
          <p>Connect and communicate instantly with potential co-founders.</p>
        </div>
        <div className="feature">
          <h3>User Profiles</h3>
          <p>Create detailed profiles to showcase your skills and ideas.</p>
        </div>
        <div className="feature">
          <h3>Project Management</h3>
          <p>Manage your startup projects and collaborate effectively.</p>
        </div>
      </div>
    </section>
    <QuoteCard />
    <section className="cta-section">
      <h2 className="cta-title">Join Our Community</h2>
      <p>Sign up now and find your perfect match to start your entrepreneurial journey.</p>
      <button className="cta-button" onClick={onSignUp}>
        Sign Up
      </button>
    </section>
  </main>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <p>&copy; {new Date().getFullYear()} MeetMyMate. All rights reserved.</p>
  </footer>
);

// Welcome Component to display the main content
const Welcome = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleGetStarted = () => {
    setShowSignup(true);
  };

  const handleSignUp = () => {
    setShowSignup(true);
  };

  return showSignup ? (
    <Register />
  ) : (
    <>
      <Header onGetStarted={handleGetStarted} />
      <br />
      <h1 className="headline">Connect with Your Perfect Co-founder</h1>
      <HeroSection onGetStarted={handleGetStarted} />
      <br />
      <h2 className="subheadline">Find partners to turn your startup ideas into reality</h2>
      <button className="cta-button" onClick={handleGetStarted}>
        Get Started
      </button>
      <MainContent onSignUp={handleSignUp} />
      <Footer />
    </>
  );
};

export default Welcome;
