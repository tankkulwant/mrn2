import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Signup from './Signup';
import Register from './Register';

// Header Component
const Header = ({ onGetStarted }) => (
  <header className="header">
    <Navbar />
  </header>
);

// Hero Section Component
const HeroSection = ({ onGetStarted }) => (
  <section className="hero-section">
    <h1 className="headline">Connect with Your Perfect Co-founder</h1>
    <h2 className="subheadline">Find partners to turn your startup ideas into reality</h2>
    <button className="cta-button" onClick={onGetStarted}>
      Get Started
    </button>
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
          <img src="/SlideOne.jpg" alt="SlideOne"></img>
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

// App Component
const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleGetStarted = () => {
    setShowSignup(true);
  };

  const handleSignUp = () => {
    setShowSignup(true);
  };

  return (
    <div className="app">
      {showSignup ? (
        <Register />
        
      ) : (
        <>
          <Header onGetStarted={handleGetStarted} />
          <HeroSection onGetStarted={handleGetStarted} />
          <MainContent onSignUp={handleSignUp} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
