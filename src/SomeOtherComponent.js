import React, { useEffect, useState } from 'react';

const SomeOtherComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!userId) {
      console.log('No userId available');
        return;
    }
  
    fetch(`http://localhost:5000/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);
  

  if (!userData) {
    return <p>Loading...</p>; // Handle loading state
  }

  return (
    <div>
      <h2>Welcome, {userData.displayName}</h2>
      <img
        src={userData.photoURL}
        alt={`${userData.displayName}'s profile`}
        style={{ width: '100px', borderRadius: '50%' }}
      />
    </div>
  );
};

export default SomeOtherComponent;
