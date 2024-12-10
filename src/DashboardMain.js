import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import { NavLink } from 'react-router-dom';

const DashboardMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <ImageSlider slides={[{ image: 'logofinal.jpeg' }, { image: 'SlideOne.jpg' }]} />
      <br />

      <div>
        <div className="bg-white p-4 sm:p-6 rounded shadow mb-6">
          {/* My Profile */}
          <h2 className="text-lg sm:text-xl font-semibold mb-4">My Profile</h2>
          <div className="bg-gray-50 p-4 rounded border shadow hover:shadow-lg mb-6 flex flex-col sm:flex-row items-center">
            {/* Profile Picture */}
            <img
              src="profile-user.png"
              alt="Profile"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 sm:mb-0 sm:mr-4 cursor-pointer"
              onClick={handleImageClick}
            />

            {/* Profile Details */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">Entrepreneur | Founder</p>
              <p className="text-gray-600">Working on: Blockchain Fintech Solution</p>
              <p className="text-gray-600">Location: San Francisco, CA</p>
              <p className="text-gray-600">Connections: 150</p>
              <p className="text-gray-600">Followers: 2,300</p>
              <NavLink to="/profileview">
                <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                  Edit Profile
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Pop-up Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 sm:p-6 rounded shadow-lg w-11/12 sm:w-96">
              <h3 className="text-lg font-semibold mb-4">Profile Options</h3>
              <div className="space-y-4">
                <NavLink to="/profileview">
                  <button className="w-full bg-green-500 text-white px-3 py-2 rounded">
                    View Profile
                  </button>
                </NavLink>
                <NavLink to="/profileedit">
                  <button className="w-full bg-blue-500 text-white px-3 py-2 rounded">
                    Edit Profile
                  </button>
                </NavLink>
              </div>
              <button
                className="mt-4 w-full bg-red-500 text-white px-3 py-2 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* My Resources */}
      <h2 className="text-lg sm:text-xl font-semibold mb-4">My Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {['Idea', 'Team', 'Investment', 'Mentorship', 'Labour'].map((resource, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded border shadow hover:shadow-lg"
          >
            <h3 className="font-semibold mb-2">{resource}</h3>
            <p className="text-gray-600">Status: Available</p>
          </div>
        ))}
      </div>

      {/* Looking For */}
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Looking For</h2>
      <div className="bg-gray-50 p-4 rounded border shadow hover:shadow-lg mb-6">
        <h3 className="font-semibold mb-2">Looking for investment & partnerships</h3>
        <p className="text-gray-600">
          Exploring investors and skilled partners to scale the project.
        </p>
        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          Post Request
        </button>
      </div>

      {/* Top Profiles */}
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Top Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {['Alice Johnson', 'Bob Smith', 'Sarah Lee'].map((profile, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded border shadow hover:shadow-lg"
          >
            <h3 className="font-semibold mb-2">{profile}</h3>
            <p className="text-gray-600">Sector: Fintech</p>
            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Quick Action Button */}
      <div className="flex justify-center">
        <button className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600">
          Explore More Profiles
        </button>
      </div>
    </div>
  );
};

export default DashboardMain;
