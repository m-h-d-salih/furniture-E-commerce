import React, { useState } from 'react';

function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const orderDetails = [
    "Order 1: Item A",
    "Order 2: Item B",
    "Order 3: Item C",
    "Order 4: Item D",
    "Order 5: Item E",
    "Order 6: Item F",
    "Order 7: Item G",
    "Order 8: Item H",
  ];

  return (
    <div className="p-4">
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Show User Profile
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg w-1/3 p-6 overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">User Profile</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div>
              <p><strong>Username:</strong> user123</p>
              <p><strong>Email:</strong> user123@example.com</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Order Details:</h3>
              <div className="max-h-32 overflow-y-auto">
                <ul className="list-disc pl-5">
                  {orderDetails.map((order, index) => (
                    <li key={index}>{order}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
