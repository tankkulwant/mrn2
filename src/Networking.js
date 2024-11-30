import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './Navbar';

const Networking = () => {
  const [requests, setRequests] = useState([]);  // User profiles
  const [page, setPage] = useState(1);  // Current page for pagination
  const [showConfirmation, setShowConfirmation] = useState(false);  // State for confirmation modal
  const [currentAction, setCurrentAction] = useState(null);  // Store current action (Accept/Decline)
  const [currentUser, setCurrentUser] = useState(null);  // Store the current user profile for confirmation

  // Memoize fetchProfiles function to avoid redefining it on each render
  const fetchProfiles = useCallback(async () => {
    const response = await fetch(`https://randomuser.me/api/?results=5&page=${page}`);
    const data = await response.json();
    setRequests((prevRequests) => [...prevRequests, ...data.results]);
  }, [page]);  // `page` is the dependency because it affects the API call

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);  // Add fetchProfiles to the dependency array

  // RequestCard component defined in the same file
  const RequestCard = ({ profileImage, name, role, user, id }) => {
    const handleAction = (action) => {
      setCurrentAction(action);
      setCurrentUser(user);
      setShowConfirmation(true);  // Show confirmation modal
    };

    return (
      <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row items-center sm:space-x-4 p-4 mb-4">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-4 sm:mb-0">
          <img
            className="h-16 w-16 rounded-full border-2 border-gray-300"
            src={profileImage}
            alt={name}
          />
        </div>

        {/* User Info */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex mt-4 sm:mt-0 space-x-2">
          <button
            className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={() => handleAction('accept')}
          >
            Accept
          </button>
          <button
            className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={() => handleAction('decline')}
          >
            Decline
          </button>
        </div>
      </div>
    );
  };

  // Handle confirmation action (Accept/Decline)
  const handleConfirmation = () => {
    if (currentAction === 'accept') {
      console.log(`Request accepted for: ${currentUser.name.first}`);
    } else if (currentAction === 'decline') {
      console.log(`Request declined for: ${currentUser.name.first}`);
    }
    setShowConfirmation(false);  // Close confirmation modal
    setCurrentAction(null); // Reset action
    setCurrentUser(null); // Reset user
  };

  // Close confirmation modal without action
  const closeConfirmation = () => {
    setShowConfirmation(false);
    setCurrentAction(null); // Reset action
    setCurrentUser(null); // Reset user
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Networking Requests</h2>

        {/* Render request cards */}
        {requests.map((request) => (
          <RequestCard
            key={request.login.uuid}  // Use unique ID for key
            profileImage={request.picture.large}
            name={`${request.name.first} ${request.name.last}`}
            role={request.gender === "male" ? "Software Engineer" : "Product Manager"} // Or fetch real role if available
            user={request}  // Pass the whole user data for confirmation
            id={request.login.uuid} // Unique ID to use if necessary
          />
        ))}

        {/* Load More Button */}
        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
            onClick={() => setPage(page + 1)}  // Increment page to load next set of profiles
            disabled={requests.length < 5}  // Disable button if there are fewer than 5 profiles
          >
            Load More
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50" aria-labelledby="confirmation-modal" aria-describedby="confirmation-description">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
            <h3 id="confirmation-modal" className="text-lg font-semibold mb-4">Are you sure?</h3>
            <p id="confirmation-description" className="text-sm mb-4">
              Do you really want to {currentAction} the request from{" "}
              {currentUser.name.first} {currentUser.name.last}?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-md"
                onClick={closeConfirmation}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 text-white ${currentAction === 'accept' ? 'bg-blue-500' : 'bg-red-500'} hover:bg-${currentAction === 'accept' ? 'blue' : 'red'}-600 rounded-md`}
                onClick={handleConfirmation}
              >
                {currentAction === 'accept' ? 'Accept' : 'Decline'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Networking;
