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
        className='flex flex-col md:flex-row flex-wrap justify-evenly items-center mt-10 h-screen  bg-center min-h-screen bg-black' 
        style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* <img src={bgimg}/> */}
        <div className=' text-white h-40 w-52 mb-3 md:mb-0 md:mr-3 text-center  shadow-lg hover:scale-y-105 hover:scale-x-105 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100' onClick={() => navigate(`admin/users`)}>
          <h1 className='font-bold text-3xl text-center mt-8'> Users</h1>
          <h2 className='text-3xl font-bold text-red-500'>{users.length}</h2>
          {/* <button className='text-blue-600 font-bold' >View users</button> */}
        </div>
        <div className='text-3xl text-white h-40 w-52 mb-3 md:mb-0 md:mr-3 text-center shadow-lg hover:scale-y-105 hover:scale-x-105 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100'  onClick={() => navigate(`admin/products`)}>
          <h1 className='font-bold text-center mt-8'> Products</h1>
          <h2 className='text-3xl font-bold text-red-500'>{productslist.length}</h2>
          {/* <button className='text-blue-600 font-bold'>View products</button> */}
        </div>
        <div className='text-3xl text-white h-40 w-52 mb-3 md:mb-0 md:mr-3 text-center  shadow-lg hover:scale-y-105 hover:scale-x-105 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100'>
          <h1 className=' font-bold text-center mt-8'>Revenue</h1>
          <h2 className='text-3xl font-bold text-red-500 mt-3'>{revenue} Rs</h2>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
