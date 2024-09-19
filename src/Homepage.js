import React, { useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import SomeOtherComponent from './SomeOtherComponent';
// import MainPage from './MainPage'; // Separate MainPage component (Home)
import Inbox from './Inbox'; // Separate component for Inbox
import Home from './Home';

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
        toast.error('You need to be logged in to access this page.');
        navigate('/welcome'); // Redirect to the Welcome page if not logged in
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div>
    
      <ToastContainer />
      <LogoutButton />

      {/* Define Routes to switch between different components */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/inbox" element={<Inbox />} /> {/* Inbox page */}
        <Route path="/profile" element={<SomeOtherComponent />} /> {/* Profile or other component */}
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default Homepage;
