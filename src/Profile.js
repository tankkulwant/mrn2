import React from 'react';
import Navbar from './Navbar';

const Profile = () => {
  const profile = {
    name: "John Doe",
    location: "New York, USA",
    skills: ["Skill1", "Skill2"],
    connections: 182,
    followers: 2000,
    bio: "A passionate developer and tech enthusiast.",
    email: "johndoe@example.com",
    website: "https://www.johndoewebsite.com", // Added https:// for the website
  };

  return (

<div>
    <Navbar />
    <br></br>
<div className="max-w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden m-4 p-6">
      <div className="p-4">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
            {/* Placeholder for photo */}
            <span className="text-gray-500">Photo</span>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
          <p className="text-sm text-gray-600">{profile.location}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            {profile.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <div className="mt-4">
            <p>
              <span className="font-semibold text-gray-700">Connections:</span> {profile.connections}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Followers:</span> {profile.followers}
            </p>
          </div>
          <div className="mt-4">
            <p>
              <span className="font-semibold text-gray-700">Bio:</span> {profile.bio}
            </p>
          </div>
          <div className="mt-4">
            <p>
              <span className="font-semibold text-gray-700">Email:</span>{" "}
              <a href={`mailto:${profile.email}`} className="text-blue-500 hover:underline">
                {profile.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-gray-700">Website:</span>{" "}
              <a href={profile.website} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                {profile.website}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
</div>

 
  );
};

export default Profile;
