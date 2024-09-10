import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
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
    } else {
      console.error('Error saving profile');
    }
  };

  return (
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
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Years of Experience:</label>
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} />
        </div>

        {/* Continue adding more fields similarly for education, startup info, interests, etc. */}

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
