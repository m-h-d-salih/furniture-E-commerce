import React from 'react';

function UserOrderModal({ isOpen, onClose, user }) {
    if (!isOpen) return null;
    // console.log(user.order.length);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded p-4 w-1/2">
                <div className="flex justify-between items-center pb-3">
                    <h2 className="text-xl font-bold">Order Details for {user.name}</h2>
                    {/* <button className="text-black close-modal" onClick={onClose}>X</button> */}
                </div>
               {user.order.length===0?(<p>No orders</p>):(
                <div className='border-gray-800 mb-4 max-h-60 overflow-y-auto'>
                    {user.order.map((item, index) => (
                        <div key={index} className="border-b border-gray-300 p-2">
                            <p className='font-bold'>Phone No: <span className='text-red-500 font-normal'>{item.phone}</span></p>
                            <p className='font-bold'>Order Date:<span className='text-red-500 font-normal'> {item.orderDate}</span></p>
                            <p className='font-bold'>Order Email: <span className='text-red-500 font-normal'>{item.phone}</span></p>
                            <p className='font-bold'>Ordered items: {item.cartitems.map((item,index)=>(
                                
                                <span key={index} className='text-red-500 font-normal'><br/>{index+1}. {item.title}</span>
                                
                            ))
                                
                                
                                }</p>
                                <p className='font-bold'>Total Price: $ <span className='text-red-500 font-normal'>{item.totalprice}</span></p>

                        </div>
                    ))}
                </div>
                )}
                <div className="flex justify-end pt-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default UserOrderModal;
