import React, { useContext } from 'react'; 
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext'; 

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        {/* Logo */}
        <img 
          onClick={() => navigate('/')} 
          className='cursor-pointer h-20' 
          src={assets.logo} 
          alt="HireUNex Logo" 
        />

        {/* Conditional Rendering */}
        {
          user ? (
            <div className="flex items-center gap-4 max-sm:text-xs">
              {/* AI Interview Practice button */}
              <a
                href="https://interview-u-nex.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
              >
                AI Interview Practice
              </a>

              {/* Applied Jobs button */}
              <Link 
                to="/applications" 
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
              >
                Applied Jobs
              </Link>

              {/* Greeting Badge */}
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full shadow-sm border border-gray-300 max-sm:hidden">
                Hi, {`${user.firstName ?? ''} ${user.lastName ?? ''}`}
              </span>

              <UserButton />
            </div>
          ) : (
            <div className='flex gap-4 max-sm:text-xs'>
              <button 
                onClick={e => setShowRecruiterLogin(true)} 
                className='text-gray-600'
              >
                Recruiter Login
              </button>
              <button 
                onClick={() => openSignIn()} 
                className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full hover:bg-blue-700'
              >
                Login
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
