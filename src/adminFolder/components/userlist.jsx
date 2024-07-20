import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/cartContext';
import UserCartModal from './modal/userCartmodal';
import UserOrderModal from './modal/userOrdermodal';


function UserList() {
    const {users,deleteuser}=useContext(MyContext)
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const handleCartClick = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
      };
      const handleOrderClick = (user) => {
        setSelectedUser(user);
        setIsOrderModalOpen(true);
    };
    const handleCloseOrderModal = () => {
        setIsOrderModalOpen(false);
        setSelectedUser(null);
    };
     
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
    const  filtereduser= users.filter(item =>
        item.name ?.toLowerCase().includes(searchTerm.toLowerCase())
       );

    return (
        <>
        <div className="container mx-auto py-4 mt-10 px-4 sm:px-8">
        <div className="w-full flex justify-center mb-4 mt-24 ">
      <input
        type="text"
        placeholder=" Search..."
        className="items-center pl-3 w-1/2 sm:p-2 border border-gray-300 rounded max-w-md"
        value={searchTerm}
        onChange={handleSearchChange}
      />
     
    </div>
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
                        {filtereduser.map(user => (
                            <tr key={user.id} className="text-center border-b">
                                <td className="py-2 px-4">{user.id}</td>
                                <td className="py-2 px-4">{user.name}</td>
                                <td className="py-2 px-4">{user.email}</td>
                                <td className="py-2 px-4">
                                    <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-200 hover:text-black"
                                     onClick={() => handleCartClick(user)}
                                    >
                                        View Cart
                                    </button>
                                </td>
                                <td className="py-2 px-4">
                                    <button className="bg-black text-white px-4 py-1 rounded  hover:bg-gray-200 hover:text-black"
                                    onClick={()=>handleOrderClick(user)}>
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
      {selectedUser && (
                    <UserOrderModal
                        isOpen={isOrderModalOpen}
                        onClose={handleCloseOrderModal}
                        user={selectedUser}
                    />
                )}

            </div>
        </div>
        </>
    );
}

export default UserList;
