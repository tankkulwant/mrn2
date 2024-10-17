import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Profile = () => {
  const [image, setImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set selected image
  };

  const handleImageUpload = async () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('profilePic', image); // Append image file

    try {
      // Send POST request to upload image
      const response = await axios.post('http://localhost:5000/upload-profile-picture', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadStatus('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image', error);
      setUploadStatus('Error uploading image');
    }
  };

  return (

<div>
    <Navbar />
    <br></br>
<div className="max-w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden m-4 p-6">
      <div className="p-4">
        <div className="flex justify-center mb-4">
          <div className="w-75 h-75 bg-gray-300 rounded-full flex items-center justify-center">
            {/* Placeholder or selected image */}
            {image ? (
                <img src={URL.createObjectURL(image)} alt="Profile" className="w-74 h-74 rounded-full" />
              ) : (
                <span className="text-gray-500">Photo</span>
              )}
          </div>
        </div>

 {/* Image Upload Input */}
 <div className="flex justify-center mb-4">
            <input type="file" onChange={handleImageChange} className="mt-2" />
          </div>

          <div className="flex justify-center">
            <button onClick={handleImageUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
              Upload Image
            </button>
          </div>

          {uploadStatus && (
            <div className="text-center mt-4">
              <p className={`text-${uploadStatus.includes('Error') ? 'red' : 'green'}-500`}>{uploadStatus}</p>
            </div>
          )}

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
