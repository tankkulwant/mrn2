import React from 'react';

const DashboardMain = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* User Stats & Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* User Stats */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">My Stats</h2>
          <p className="text-gray-600">Projects Completed: 3</p>
          <p className="text-gray-600">Skills Endorsed: 5</p>
          <p className="text-gray-600">Collaborations: 2</p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-4 rounded shadow col-span-2">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">Create a Project</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Invite Connections</button>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example Project Card */}
          <div className="bg-gray-50 p-4 rounded border shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">Project Alpha</h3>
            <p className="text-gray-600">Progress: 70%</p>
            <p className="text-gray-600">Next Step: Finalize MVP</p>
            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">View Details</button>
          </div>
          {/* Add more project cards similarly */}
        </div>
      </div>

      {/* Messages and Requests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Messages Section */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <div className="space-y-4">
            {/* Example Message */}
            <div className="bg-gray-50 p-4 rounded shadow hover:bg-gray-100">
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-600">"Hey, would love to discuss the project..."</p>
              <button className="mt-2 text-blue-500">Reply</button>
            </div>
            {/* Add more messages */}
          </div>
        </div>

        {/* Collaboration Requests */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Collaboration Requests</h2>
          <div className="space-y-4">
            {/* Example Request */}
            <div className="bg-gray-50 p-4 rounded shadow hover:bg-gray-100">
              <p className="font-semibold">Jane Smith</p>
              <p className="text-gray-600">Requested to join your project.</p>
              <div className="mt-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">Approve</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Decline</button>
              </div>
            </div>
            {/* Add more requests */}
          </div>
        </div>
      </div>

      {/* Network Feed */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Network Feed</h2>
        <div className="space-y-4">
          {/* Example Feed Item */}
          <div className="bg-gray-50 p-4 rounded shadow hover:bg-gray-100">
            <p className="font-semibold">Michael Brown</p>
            <p className="text-gray-600">Started a new project: "Blockchain App Development"</p>
          </div>
          {/* Add more feed items */}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;