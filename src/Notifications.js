import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New message from John', body: 'You have a new message from John Doe.', time: '10 minutes ago', read: false },
    { id: 2, title: 'Reminder: Meeting at 3 PM', body: 'Don\'t forget about your meeting at 3 PM today.', time: '2 hours ago', read: false },
    { id: 3, title: 'System Update Available', body: 'A new system update is available. Please update your software.', time: '1 day ago', read: false }
  ]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [currentNotification, setCurrentNotification] = useState(null);

  const handleAction = (action, notification) => {
    setCurrentAction(action);
    setCurrentNotification(notification);
    setShowConfirmation(true);
  };

  const handleConfirmation = () => {
    if (currentAction === 'delete') {
      setNotifications(notifications.filter((notif) => notif.id !== currentNotification.id));
      console.log(`Notification deleted: ${currentNotification.title}`);
    } else if (currentAction === 'markRead') {
      setNotifications(notifications.map((notif) =>
        notif.id === currentNotification.id ? { ...notif, read: true } : notif
      ));
      console.log(`Notification marked as read: ${currentNotification.title}`);
    }
    setShowConfirmation(false);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const NotificationCard = ({ title, body, time, read, notification }) => {
    return (
      <div className={`bg-white shadow-lg rounded-lg p-4 mb-4 ${read ? 'border-l-4 border-green-500' : 'border-l-4 border-gray-300'}`}>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{body}</p>
        <p className="text-xs text-gray-500 mt-2">{time}</p>

        <div className="mt-4 flex space-x-4">
          <button
            className="px-4 py-2 text-sm text-blue-500 hover:bg-gray-100 rounded-md"
            onClick={() => handleAction('markRead', notification)}
          >
            Mark as Read
          </button>
          <button
            className="px-4 py-2 text-sm text-red-500 hover:bg-gray-100 rounded-md"
            onClick={() => handleAction('delete', notification)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Notifications</h2>

        {/* Render notification cards */}
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            body={notification.body}
            time={notification.time}
            read={notification.read}
            notification={notification}
          />
        ))}

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
              <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
              <p className="text-sm mb-4">
                Do you really want to {currentAction} the notification titled: "{currentNotification.title}"?
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
                  {currentAction === 'delete' ? 'Delete' : 'Mark as Read'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
