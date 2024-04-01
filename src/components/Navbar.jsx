import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Imports for navigation and location
import { FaCalendarAlt} from 'react-icons/fa';
import { FiLogIn} from 'react-icons/fi';

const Navbar = ({children})  => {
  const location = useLocation(); // Get current location from react-router-dom


  return (

    <nav className="bg-blue-200 p-4 ml-44">

      <div className="container mx-auto ml-6">

        <div className="flex justify-between items-center">

          <div className="text-black font-bold text-xl"></div>
          <ul className="mt-3 text-black font-bold">

          <div className="hidden md:flex space-x-4">
          <li className={location.pathname === "/home" ? 'text-blue-700' : 'hover:bg-blue-100 rounded-full list-none'}>
          <NavLink to="/home" className="flex items-center rounded-full py-3 px-4 duration-300 cursor-pointer">
            <FiLogIn className="inline-block w-6 h-6 mr-2 -mt-2" />
            <span className="text-xl">Login</span>
          </NavLink>
        </li>
        <li className={location.pathname === "/calendar" ? 'text-blue-700' : 'hover:bg-blue-100 rounded-full list-none'}>
          <NavLink to="/calendar" className="flex items-center rounded-full py-3 px-4 duration-300 cursor-pointer">
            <FaCalendarAlt  className="inline-block w-6 h-6 mr-2 -mt-2" />
            <span className="text-xl">Calendar</span>
          </NavLink>
        </li>
           
          </div>
          </ul>

        </div>
        
        <main className='h-100vh w-200px'>{children}</main>

      </div>

    </nav>

  );

}

export default Navbar;