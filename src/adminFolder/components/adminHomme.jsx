import React, { useContext } from 'react';
import { MyContext } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import bgimg from '../../assets/adminhome1.jpg'; 

function AdminHome() {
  const navigate = useNavigate();
  const { users, productslist, revenue } = useContext(MyContext);

  return (
    <>
      <div 
        className='flex flex-col md:flex-row flex-wrap justify-evenly items-center mt-10 ml-5 bg-cover bg-center min-h-screen' 
        style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* <img src={bgimg}/> */}
        <div className='bg-neutral-100 text-black h-40 w-52 mb-3 md:mb-0 md:mr-3 text-center  rounded-lg shadow-lg hover:scale-y-105 hover:scale-x-105'>
          <h1 className='font-bold text-center mt-8'>Total number of Users</h1>
          <h2 className='text-2xl text-red-500'>{users.length}</h2>
          <button className='text-blue-600 font-bold' onClick={() => navigate(`admin/users`)}>View users</button>
        </div>
        <div className='bg-neutral-100 text-black h-40 w-52 mb-3 md:mb-0 md:mr-3 text-center rounded-lg shadow-lg hover:scale-y-105 hover:scale-x-105'>
          <h1 className='font-bold text-center mt-8'>Total number of Products</h1>
          <h2 className='text-2xl text-red-500'>{productslist.length}</h2>
          <button className='text-blue-600 font-bold' onClick={() => navigate(`admin/products`)}>View products</button>
        </div>
        <div className='bg-neutral-100 text-black h-40 w-52 mb-3 md:mb-0 md:mr-3 text-center rounded-lg shadow-lg hover:scale-y-105 hover:scale-x-105'>
          <h1 className='font-bold text-center mt-8'>Total Revenue</h1>
          <h2 className='text-2xl text-red-500 mt-3'>{revenue} Rs</h2>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
