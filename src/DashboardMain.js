import React from 'react';
import ImageSlider from './ImageSlider';

const DashboardMain = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
<ImageSlider  slides={[{ image: 'logofinal.jpeg' }, { image: 'SlideOne.jpg' }]} />
        
<br></br>

<div className="bg-white p-6 rounded shadow mb-6">
  {/* My Profile */}
  <h2 className="text-xl font-semibold mb-4">My Profile</h2>
  <div className="bg-gray-50 p-4 rounded border shadow hover:shadow-lg mb-6">
    <h3 className="font-semibold mb-2">John Doe</h3>
    <p className="text-gray-600">Entrepreneur | Founder</p>
    <p className="text-gray-600">Working on: Blockchain Fintech Solution</p>
    <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Edit Profile</button>
  </div>

  {/* My Resources */}
  <h2 className="text-xl font-semibold mb-4">My Resources</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
    {['Idea', 'Team', 'Investment', 'Mentorship', 'Labour'].map((resource, index) => (
      <div key={index} className="bg-gray-50 p-4 rounded border shadow hover:shadow-lg">
        <h3 className="font-semibold mb-2">{resource}</h3>
        <p className="text-gray-600">Status: Available</p>
      </div>
    ))}
  </div>

  {/* Looking For */}
  <h2 className="text-xl font-semibold mb-4">Looking For</h2>
  <div className="bg-gray-50 p-4 rounded border shadow hover:shadow-lg mb-6">
    <h3 className="font-semibold mb-2">Looking for investment & partnerships</h3>
    <p className="text-gray-600">Exploring investors and skilled partners to scale the project.</p>
    <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Post Request</button>
  </div>

  {/* Top Profiles */}
  <h2 className="text-xl font-semibold mb-4">Top Profiles</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    {['Alice Johnson', 'Bob Smith', 'Sarah Lee'].map((profile, index) => (
      <div key={index} className="bg-gray-50 p-4 rounded border shadow hover:shadow-lg">
        <h3 className="font-semibold mb-2">{profile}</h3>
        <p className="text-gray-600">Sector: Fintech</p>
        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">View Profile</button>
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

      
    </div>
  );
};

export default DashboardMain;