import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/cartContext';
import UserCartModal from './modal/userCartmodal';


function UserList() {
    const {users,deleteuser}=useContext(MyContext)
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleRowClick = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
      };
    

    return (
        <div className="container mx-auto py-4 mt-20 px-4 sm:px-8">
            <div className="overflow-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/6 py-2 px-4 text-center">ID</th>
                            <th className="w-1/6 py-2 px-4 text-center">Name</th>
                            <th className="w-2/6 py-2 px-4 text-center">Email</th>
                            <th className="w-1/6 py-2 px-4 text-center">View Cart</th>
                            <th className="w-1/6 py-2 px-4 text-center">View Order</th>
                            <th className="w-1/6 py-2 px-4 text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="text-center border-b">
                                <td className="py-2 px-4">{user.id}</td>
                                <td className="py-2 px-4">{user.name}</td>
                                <td className="py-2 px-4">{user.email}</td>
                                <td className="py-2 px-4">
                                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
                                     onClick={() => handleRowClick(user)}
                                    >
                                        View Cart
                                    </button>
                                </td>
                                <td className="py-2 px-4">
                                    <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700">
                                        View Order
                                    </button>
                                </td>
                                <td className="py-2 px-4">
                                    <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
                                    onClick={()=>deleteuser(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {selectedUser && (
        <UserCartModal
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          user={selectedUser} 
        />
      )}

            </div>
        </div>
    );
}

export default UserList;
