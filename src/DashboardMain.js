import React from 'react';
import ImageSlider from './ImageSlider';


const DashboardMain = () => {
 
  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <ImageSlider slides={[{ image: 'logofinal.jpeg' }, { image: 'SlideOne.jpg' }]} />
      <br />

   

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
