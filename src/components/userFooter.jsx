import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function UserFooter() {
  return (
    <footer className="bg-black text-white p-4   w-full z-10 mt-20">
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
  </footer>
  )
}

export default UserFooter;
