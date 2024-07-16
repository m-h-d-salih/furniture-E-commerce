import React, { useContext } from 'react';
import { MyContext } from '../../context/cartContext';

function AdminHome() {
  const { cart,userlist,orderlist ,productslist} = useContext(MyContext);
//   console.log(orderlist);

  return (
    <div className='flex flex-col md:flex-row flex-wrap justify-evenly items-center mt-56 ml-5 '>
      <div className='bg-slate-400 text-white h-40 w-52 mb-3 md:mb-0 md:mr-3 text-center '>
        <h1 className='font-bold text-center mt-8'>Total number of Users</h1>
        <h2 className='text-2xl text-red-500'>{userlist.length}</h2>
        <button className='text-blue-600 font-bold'>View user</button>
        </div>
      <div className='bg-slate-400 text-white h-40 w-52 mb-3 md:mb-0 md:mr-3  text-center'>
        <h1 className='font-bold text-center mt-8'>
        Total number of Users</h1>
        <h2 className='text-2xl text-red-500'>{productslist.length}</h2>
        <button className='text-blue-600 font-bold'>View products</button>
        </div>
      <div className='bg-slate-400 text-white h-40 w-52 mb-3 md:mb-0 md:mr-3  text-center'>
        <h1 className='font-bold text-center mt-8'>Total number of Users</h1>
        <h2 className='text-2xl text-red-500'>{orderlist.length}</h2>
        <button className='text-blue-600 font-bold'>View order</button>
        </div>
    </div>
  );
}

export default AdminHome;
