import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [deletedStudent, setDeletedStudent] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call your API to delete the student with the specified studentID
    // Then, set the deletedStudent state to the student that was deleted
    // You can also show a confirmation message or redirect to another page here
  };

  return (
    <div className="w-1/2 bg-blue-100 fixed h-2/3 rounded-lg px-36  ml-96 border-2 shadow-inner shadow-blue-500/50 mt-24 gap-x-48 ">
         <h1 className="text-2xl text-black ml-44 mt-10">Delete Student </h1>
    <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-lg p-8 mt-24">
      
      
      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch className="h-5 w-5 text-gray-500 ml-80 mt-6" />
        </div>
        <label htmlFor="searchTerm" className="block text-gray-700 font-bold mb-2">
          Search Student by ID:
        </label>
        <input
          type="text"
          id="searchTerm"
          name="searchTerm"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Student by ID"
        />
      </div>
      </form>
      <button
        type="submit"
        disabled={!searchTerm}
        className= "bg-sky-600 hover:bg-sky-200 text-white font-bold py-2 px-4  focus:outline-none focus-within:shadow-lg border rounded mt-20">
       Cancel
      </button>
      <button
        type="submit"
        disabled={!searchTerm}
        className=' bg-sky-600 hover:bg-sky-200 text-white font-bold py-2 px-4  focus:outline-none focus-within:shadow-lg ml-72 border rounded">'
      >
        Delete 
      </button>
      {deletedStudent && (
        <div className=" bg-green-100 border border-green-500 rounded-lg p-4">
          <p className="text-green-700">Successfully deleted student with ID: {deletedStudent.id}</p>
        </div>
      )}
    
    </div>
  );
}

export default StudentManagement;