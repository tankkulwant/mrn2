import React, { useState, useEffect } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import './ProfileForm.css';

const ProfileForm = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to access location and state
  const [formData, setFormData] = useState({
    email: location.state?.email || '', // Prefill the email from location state
    fullName: '',
    phoneNumber: '',
    jobTitle: '',
    companyName: '',
    website: '',
    linkedin: '',
    location: '',
    experience: '',
    startupName: '',
    industry: '',
    startupStage: '',
    fundingStage: '',
    teamSize: '',
    vision: '',
    degree: '',
    fieldOfStudy: '',
    institution: '',
    graduationYear: '',
    skills: '',
    interests: '',
    lookingFor: '',
  });
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState('');

  // Fetch the user's location using the Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      setIsLoadingLocation(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log('User coordinates:', latitude, longitude);

          const apiKey = 'baa450aaa9b6459fa94bcb98a7363640'; // Replace with your OpenCage API key
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
            );
            const data = await response.json();

            if (data.results.length > 0) {
              const location = data.results[0].formatted; // Get the formatted address
              setFormData((prevFormData) => ({
                ...prevFormData,
                location: location, // Auto-fill the location field
              }));
            }
          } catch (error) {
            setLocationError('Error fetching location');
            console.error('Error fetching location:', error);
          } finally {
            setIsLoadingLocation(false);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          setLocationError('Geolocation access denied or unavailable');
          setIsLoadingLocation(false);
        }
      );
    } else {
      setLocationError('Geolocation not supported by your browser');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Profile saved:', result);
      navigate('/'); // Redirect to the main website after saving profile
    } else {
      console.error('Error saving profile');
    }
  };

  return (
    <div>
      <div className='headerlogo'>
        <img src="meetmymatelogo.jpg" alt='logo' style={{ width: '100px', height: '70px', margin: '10px' }} />
      </div>
      <div className="profile-form-container">
        <h2>Create Your Profile</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Job Title:</label>
            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Company Name:</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Website:</label>
            <input type="url" name="website" value={formData.website} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>LinkedIn:</label>
            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={isLoadingLocation ? 'Fetching location...' : formData.location}
              onChange={handleChange}
              required
              disabled={isLoadingLocation}
            />
            {locationError && <p className="error">{locationError}</p>}
          </div>
          <div className="form-group">
            <label>Years of Experience:</label>
            <input type="number" name="experience" value={formData.experience} onChange={handleChange} />
          </div>

          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
