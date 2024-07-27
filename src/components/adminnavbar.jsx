import React, { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { MyContext } from '../context/cartContext';

const Adminnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, setIsLogged, isLogged } = useContext(MyContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false); // Close the dropdown when an item is clicked
  };

  return (
    <>
    <nav className="bg-white p-4 w-100 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center border-b-black">
        <div className="flex items-center">
          <Link to='/' className="ml-16 text-black text-2xl font-bold">WOODEN</Link>
        </div>
        <div className="mr-16 flex items-center space-x-4">
          
          <ul className="hidden md:flex ml-6 space-x-10">
            <li className="text-black hover:text-orange-600"><Link to="/admin" >Home</Link></li>
            <li className="text-black hover:text-orange-600"><Link to="admin/products" >Products</Link></li>
            <li className="text-black hover:text-orange-600"><Link to="admin/users" >Users</Link></li>
            <li className="text-black hover:text-orange-600"><Link to="/login" onClick={() => { setIsLogged(false); localStorage.clear() }}>Logout</Link></li>
          </ul>
          <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none hover:text-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 end-0 w-1/3 bg-white md:hidden z-50">
          <ul className="space-y-4 mt-4 p-4">
            <li className="text-black hover:text-orange-600" onClick={handleItemClick}>
              <Link to="/admin">Home</Link>
            </li>
            <li className="text-black hover:text-orange-600" onClick={handleItemClick}>
              <Link to="admin/products">Products</Link>
            </li>
            <li className="text-black hover:text-orange-600" onClick={handleItemClick}>
              <Link to="admin/users">Users</Link>
            </li>
            <li className="text-black hover:text-orange-600" onClick={() => { handleItemClick(); setIsLogged(false); localStorage.clear() }}>
              <Link to="/login">logout</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
    <main>
        <Outlet/>
    </main>
    </>
  );
}

export default Adminnavbar;
