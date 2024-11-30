import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './Navbar';

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [currentMessage, setCurrentMessage] = useState(null);

  const fetchMessages = useCallback(async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, ...data]);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }, [page]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleAction = (action, message) => {
    setCurrentAction(action);
    setCurrentMessage(message);
    setShowConfirmation(true);
  };

  const handleConfirmation = () => {
    if (currentAction === 'delete') {
      console.log(`Message deleted: ${currentMessage.title}`);
    } else if (currentAction === 'archive') {
      console.log(`Message archived: ${currentMessage.title}`);
    }
    setShowConfirmation(false);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const MessageCard = ({ sender, title, body, message, time }) => {
    return (
      <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4 mb-4">
        {/* Sender Profile */}
        <div className="flex items-center space-x-4">
          <img
            className="h-12 w-12 rounded-full border-2 border-gray-300"
            src={sender.profileImage}
            alt={sender.name}
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{sender.name}</h3>
            <p className="text-sm text-gray-600">{time}</p>
          </div>
        </div>

        {/* Message Body */}
        <p className="text-sm text-gray-600 mt-2">{body}</p>

        {/* Action buttons */}
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="px-4 py-2 text-sm text-red-500 hover:bg-gray-200"
            onClick={() => handleAction('delete', message)}
          >
            Delete
          </button>
          <button
            className="px-4 py-2 text-sm text-blue-500 hover:bg-gray-200"
            onClick={() => handleAction('archive', message)}
          >
            Archive
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Inbox</h2>

        {/* Render message cards */}
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            sender={{
              profileImage: "https://randomuser.me/api/portraits/men/1.jpg", // Dummy profile image
              name: "John Doe", // Dummy name
            }}
            title={message.title}
            body={message.body}
            message={message}
            time={new Date().toLocaleString()} // Dummy time (replace with actual time)
          />
        ))}

        {/* Load More Button */}
        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
            onClick={() => setPage(page + 1)}  // Increment page to load next set of messages
          >
            Load More
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
            <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
            <p className="text-sm mb-4">
              Do you really want to {currentAction} the message titled: "{currentMessage.title}"?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-md"
                onClick={closeConfirmation}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 text-white ${currentAction === 'delete' ? 'bg-red-500' : 'bg-blue-500'} hover:bg-${currentAction === 'delete' ? 'red' : 'blue'}-600 rounded-md`}
                onClick={handleConfirmation}
              >
                {currentAction === 'delete' ? 'Delete' : 'Archive'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
