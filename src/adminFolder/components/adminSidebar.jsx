import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

function AdminSidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        {/* Menu bar icon */}
        <button
          className='absolute top-4 left-4 text-2xl z-20 lg:hidden'
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen w-40 bg-neutral-100 text-dark flex flex-col justify-items-center items-center transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <ul className='mt-64'>
            <li className='mt-3'>
              <Link className='hover:bg-neutral-200 p-2 rounded'>Home</Link>
            </li>
            <li className='mt-3'>
              <Link className='hover:bg-neutral-200 p-2'>Userlist</Link>
            </li>
            <li className='mt-3'>
              <Link className='hover:bg-neutral-200 p-2'>Products</Link>
            </li>
            <li className='mt-3'>
              <Link to='/login' className='hover:bg-neutral-200 p-2'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminSidebar;
