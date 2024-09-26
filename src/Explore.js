import React, { useState, useEffect } from 'react';
import './Explore.css'; // Add some styles for your component

const Explore = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user profiles when the component mounts
    const fetchProfiles = async () => {
      try {
        const response = await fetch('/api/users/profiles'); // Adjust your API endpoint if needed
        const data = await response.json();
        setProfiles(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profiles:', error);
        setError('Failed to load profiles.');
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return <div>Loading profiles...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="explore-container">
      <h1>Explore Budding Entrepreneurs</h1>
      <div className="profile-grid">
        {profiles.map((profile) => (
          <div key={profile._id} className="profile-card">
            <img src={profile.avatar || '/default-avatar.png'} alt="Profile" className="profile-avatar" />
            <h2>{profile.name}</h2>
            <p>{profile.skills.join(', ')}</p>
            <p><strong>Looking for:</strong> {profile.lookingFor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
