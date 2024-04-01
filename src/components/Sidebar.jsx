import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Imports for navigation and location
import { FaHome, FaEdit,FaTrashAlt,FaUserAlt,FaListAlt } from 'react-icons/fa';

const Sidebar = ({children}) => {
  const location = useLocation(); // Get current location from react-router-dom

  return (
    <div className="w-64 bg-gray-300 fixed h-dvh px-4 py-5 rounded-lg shadow-inner shadow-gray-500/50 m-0">
      <div className="my-3 mb-4">
        <h1 className="text-2xl text-black ">Student Management System</h1>
      </div>
      <hr />
      <ul className="mt-3 text-black font-bold">
        <li className={location.pathname === "/addstudent" ? 'text-blue-700' : 'hover:bg-blue-100 rounded-full'}>
          <NavLink to="/addstudent" className="flex items-center rounded-full py-3 px-4 duration-300 cursor-pointer">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
            <span className="text-xl">Add Student</span>
          </NavLink>
        </li>
        <li className={location.pathname === "/updatestudent" ? 'text-blue-700' : 'hover:bg-blue-100 rounded-full'}>
          <NavLink to="/updatestudent" className="flex items-center rounded-full py-3 px-4 duration-300 cursor-pointer">
            <FaEdit className="inline-block w-6 h-6 mr-2 -mt-2" />
            <span className="text-xl">Update Student</span>
          </NavLink>
        </li>
        <li className={location.pathname === "/deletestudent" ? 'text-blue-700' : 'hover:bg-blue-100 rounded-full'}>
          <NavLink to="/deletestudent" className="flex items-center rounded-md py-3 px-4 duration-300 cursor-pointer">
            <FaTrashAlt className="inline-block w-6 h-6 mr-2 -mt-2" />
            <span className="text-xl">Delete Student</span>
          </NavLink>
        </li>
        <li className={location.pathname === "/liststudent" ? 'text-blue-700' : 'hover:bg-blue-100 rounded-full'}>
          <NavLink to="/liststudent" className="flex items-center rounded-md py-3 px-4 duration-300 cursor-pointer">
            <FaListAlt className="inline-block w-6 h-6 mr-2 -mt-2" />
            <span className="text-xl">List Student</span>
          </NavLink>
        </li>
        <li className={location.pathname === "/admin" ? 'text-blue-700' : 'hover:bg-blue-100 rounded-full'}>
          <NavLink to="/admin" className="flex items-center rounded-md py-3 px-4 duration-300 cursor-pointer">
            <FaUserAlt className="inline-block w-6 h-6 mr-2 -mt-2" />
            <span className="text-xl">Admin</span>
          </NavLink>
        </li>
      </ul>
      <main className='h-100vh w-200px'>{children}</main>
    </div>
  );
};

export default Sidebar;

