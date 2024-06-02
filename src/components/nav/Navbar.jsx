import React, { useContext, useState } from 'react';
import MenuIcon from '../../assets/menu.svg';
import YouTubeLogo from '../../assets/logo.svg';
import Avatar from '../../assets/avatar.avif';
import SearchLogo from '../../assets/search.svg';
import Searchbar from './Searchbar';
import { context } from '../../context/ContextProvider';
import { Link } from 'react-router-dom';
import MobileSearchbar from './MobileSearchbar';
import useAuth from '../../hooks/use-auth';

const Navbar = () => {
  const { toggleAside, setShowMobileSearch, showMobileSearch } =
    useContext(context);

  const {
    auth: { isAuthenticated },
    logout,
  } = useAuth();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleAside = () => {
    toggleAside();
  };

  const handleSearchbar = () => {
    setShowMobileSearch(true);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='flex justify-between items-center py-2 sm:px-4 px-2 sticky top-0 bg-white'>
      {/* show mobile searchbar */}
      {showMobileSearch && <MobileSearchbar />}
      <div className='sec-1 flex items-center gap-4'>
        <div onClick={handleAside} className='hidden sm:block w-8 h-8'>
          <img src={MenuIcon} className='w-full h-full' alt='' />
        </div>

        <Link to='/' className='w-24 h-10'>
          <img src={YouTubeLogo} className='w-full h-full' alt='' />
        </Link>
      </div>
      {/* searchbar */}
      <Searchbar />
      {/* account */}
      <div className='relative flex items-center gap-2'>
        <div onClick={handleSearchbar} className='sm:hidden w-8 h-8'>
          <img src={SearchLogo} className='rounded-full w-full h-full' alt='' />
        </div>

        <button
          id='dropdownDefaultButton'
          onClick={toggleDropdown}
          className='text-white bg-zinc-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='button'
        >
          My Account
        </button>

        {showDropdown && (
          <div
            id='dropdown'
            className='absolute right-0 top-12 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
          >
            <ul
              className='py-2 text-sm text-gray-700 dark:text-gray-200 font-bold'
              aria-labelledby='dropdownDefaultButton'
            >
              {isAuthenticated ? (
                <li>
                  <button
                    onClick={logout}
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left'
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to='/login'
                      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/signup'
                      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
