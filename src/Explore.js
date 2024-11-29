import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data structure for profiles
const profiles = [
  {
    id: 1,
    photo: 'profile-user.png',
    name: 'Amrita Joshi',
    age: 18,
    occupation: 'Software Engineer',
    businessStatus: 'Running',
    resources: 'Capital, Labour',
    needs: 'Mentorship, Partners',
    cvLink: 'url-to-cv1'
  },
  {
    id: 2,
    photo: 'profile-user.png',
    name: 'John Doe',
    age: 25,
    occupation: 'Business Executive',
    businessStatus: 'Looking to establish',
    resources: 'None yet',
    needs: 'Capital, Labour',
    cvLink: 'url-to-cv2'
  },
  // Add more profiles as needed
];

const Explore = () => {
  const navigate = useNavigate();

  const handleProfileClick = (id) => {
    navigate(`/profile/${id}`); // Navigate to the profile page with the given id
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8">Explore Profiles</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => handleProfileClick(profile.id)} // Navigate on click
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer"
          >
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-gray-600">Age: {profile.age}</p>
            <p className="text-gray-600 mb-4">{profile.occupation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
