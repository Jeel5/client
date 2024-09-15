import React from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">MLSC</h3>
          <p className="mb-4">
            Microsoft Learning Club (MLSC) is dedicated to fostering learning and
            development through Microsoft technologies and community engagement.
          </p>
          <p className="mb-4">
            <strong>Address:</strong> BVM, Vidyanagar, Anand, Gujrat, India
          </p>
          <p className="mb-4">
            <strong>Email:</strong> mlsc123@gmail.com
          </p>
        </div>

        <div className="hidden md:flex flex-col mb-8 text-center ml-10 md:mb-0">
          <h3 className="text-xl font-semibold text-nowrap mb-4 text-indigo-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-indigo-300">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-300">About Us</a></li>
            <li><a href="#team" className="hover:text-indigo-300">Team</a></li>
            <li><a href="#events" className="hover:text-indigo-300">Events</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">Contact</a></li>
            <li><a href="#join" className="hover:text-indigo-300">Join Us</a></li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col mb-8 ml-20 md:mb-0">
          <h3 className="text-xl font-semibold text-nowrap mb-4 text-indigo-400">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">Quick Links</h3>
          <div className="flex justify-center flex-wrap space-x-4">
            <a href="#home" className="hover:text-indigo-300">Home</a>
            <span>|</span>
            <a href="#about" className="hover:text-indigo-300">About Us</a>
            <span>|</span>
            <a href="#team" className="hover:text-indigo-300">Team</a>
            <span>|</span>
            <a href="#events" className="hover:text-indigo-300">Events</a>
            <span>|</span>
            <a href="#contact" className="hover:text-indigo-300">Contact</a>
            <span>|</span>
            <a href="#join" className="hover:text-indigo-300">Join Us</a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 border-t border-gray-700 pt-4">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} MLSC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
