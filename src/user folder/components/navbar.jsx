import React, { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/cartContext';
// import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState('none');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { cart, setIsLogged, isLogged, user } = useContext(MyContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false); // Close the dropdown when an item is clicked
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <nav className="bg-white p-4 w-100 fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center border-b-black">
          <div className="flex items-center">
            <Link to="/" className="ml-16 lg: text-black text-2xl font-bold">
              WOODEN
            </Link>
          </div>
          <div className="mr-16 md: flex items-center space-x-4 ">
            <Link to="cart">
              <span
                style={{ display: cart.length > 0 ? 'inline' : 'none' }}
                className="absolute text-white h-5 w-3 bg-red-500 rounded font-bold text-sm bottom-10"
              >
                {cart.length}
              </span>
              <svg
                className="hover:fill-orange-600"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
            </Link>
            {isLogged ? (
              <div className="relative">
                <div
                  className="h-6 w-6 rounded-full cursor-pointer hover:text-gray-700"
                  onClick={toggleProfileDropdown}
                >
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user"
                    alt="avatars"
                    className="rounded-full"
                  />
                  {/* <span className="text-sm">{user.name}</span> */}
                </div>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="py-2">
                    {/* {isLogged?():()} */}
                      <span className="block px-4 py-2 text-gray-800">{user.name}</span>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                       {isLogged?'Logout':'login'} 
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <div className="h-6 w-6 rounded-full cursor-pointer hover:text-gray-700">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user"
                    alt="avatars"
                    className="rounded-full"
                  />
                  {/* <span className="text-sm">Login</span> */}
                </div>
              </Link>
            )}
            <ul className="hidden md:flex ml-6 space-x-10">
              <li className="text-black hover:text-orange-600">
                <Link to="/">Home</Link>
              </li>
              <li className="text-black hover:text-orange-600">
                <Link to="shop">Shop</Link>
              </li>
              {/* <li className="text-black hover:text-orange-600">
                <Link
                  to="login"
                  onClick={() => {
                    setIsLogged(false);
                    localStorage.clear();
                  }}
                >
                  {isLogged ? 'Logout' : 'Login'}
                </Link>
              </li> */}
            </ul>
            <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none hover:text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-16 right-0 w-1/3 bg-white md:hidden z-50">
            <ul className="space-y-4 mt-4 p-4">
              <li className="text-black hover:text-orange-600" onClick={handleItemClick}>
                <Link to="/">Home</Link>
              </li>
              <li className="text-black hover:text-orange-600" onClick={handleItemClick}>
                <Link to="shop">Shop</Link>
              </li>
              {/* <li
                className="text-black hover:text-orange-600"
                onClick={() => {
                  handleItemClick();
                  setIsLogged(false);
                  localStorage.clear();
                }}
              >
                <Link to="login">{isLogged ? 'Logout' : 'Login'}</Link>
              </li> */}
            </ul>
          </div>
        )}
      </nav>
      <main className="mt-14">
        <Outlet />
      </main>
      {/* <footer className="bg-black text-white p-4  fixed bottom-0 w-full z-10 mt-">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaGithub size={30} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaFacebook size={30} />
            </a>
          </div>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer> */}
    </>
  );
};

export default Navbar;
