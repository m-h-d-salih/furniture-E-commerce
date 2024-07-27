import React from 'react';

const UserCartModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="relative bg-white  p-8 rounded shadow-lg max-w-md w-full">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl mb-4">User Details</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <h3 className="text-xl mt-4 mb-2">Cart Items</h3>
        <p className="font-bold">Number of cart items: {user.cart.length}</p>
        {user.cart && user.cart.length > 0 && (
          <div className="max-h-64 overflow-y-auto">
            {user.cart.map((item, index) => (
              <div key={index} className="mb-2 border border-gray-400 p-3">
                <p><strong>Product:</strong> {item.title}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
                <p><strong>Total:</strong>₹{(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCartModal;
