import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Admin= () => {
    const [studentID, setID] = useState("");
    const [firstName, setFirstName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Student added:", {
          studentID,
          firstName
         
        });
      };
    return (
         <div className="w-1/2 bg-blue-100 fixed h-2/3 rounded-lg px-36  ml-96 border-2 shadow-inner shadow-blue-500/50 mt-24 gap-x-48 ">
            <h1 className="text-2xl text-black ml-44">Admin </h1>
            <FaUserCircle  className="inline-block w-20 h-20 ml-44 mt-8" />
             <form onSubmit={handleSubmit}>
        <div className="mt-16">
          <label htmlFor="studentID" className="block text-gray-700 font-bold mb-2">
           Admin ID
          </label>
          <input
            type="text"
            id="studentID"
            value={studentID}
            onChange={(event) => setID(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus-within:shadow-lg disabled:cursor-not-allowed"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus-within:shadow-lg disabled:cursor-not-allowed"
          />
        </div>
        </form>
          
    <button className="bg-sky-600 hover:bg-sky-200 text-white font-bold py-2 px-4  focus:outline-none focus-within:shadow-lg border rounded mt-20">
          Add 
        </button>
        <button className="bg-sky-600 hover:bg-sky-200 text-white font-bold py-2 px-4  focus:outline-none focus-within:shadow-lg ml-72 border rounded">
          Delete
        </button>  
        </div>
    );
};

export default Admin;
