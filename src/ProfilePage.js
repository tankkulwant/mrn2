import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Sample data structure for profiles (ideally, fetch from a server)
const profiles = [
  {
    id: 1,
    photo: '/profile-user.png',
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
    photo: '/profile-user.png',
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

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use navigate instead of history
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full flex justify-start mb-4">
        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-blue-500 hover:text-blue-600">
          <img src="/back-arrow-icon.png" alt="Back" className="w-6 h-6" /> {/* Replace with your back icon */}
          <span>Back</span>
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <img src={profile.photo} alt={profile.name} className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-blue-500" />
        <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
        <p className="text-gray-500 text-sm mb-6">{profile.occupation}</p>
        
        {/* Profile Details */}
        <div className="space-y-4 text-left">
          <div className="flex justify-between">
            <span className="font-semibold">Age:</span>
            <span>{profile.age}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Business Status:</span>
            <span>{profile.businessStatus}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Resources:</span>
            <span>{profile.resources}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Needs:</span>
            <span>{profile.needs}</span>
          </div>
        </div>

        {/* CV Link */}
        <div className="mt-6">
          <a
            href={profile.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
