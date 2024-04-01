import React, { useState } from 'react'

function UpdateStudent() {
    const [studentID, setID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");
    const [degreeProgram, setDegreeProgram] = useState("");
    const [intake, setIntake] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Student added:", {
        firstName,
        lastName,
        address,
        birthday,
        degreeProgram,
        intake,
      });
    };
  
    return (
  <div className="w-1/2 bg-blue-100 fixed h-5/6 rounded-lg px-36  ml-96 border-2 shadow-inner shadow-blue-500/50 m-8">
    <h1 className="text-2xl text-black ml-44">Update Student</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-1">
          <label htmlFor="studentID" className="block text-gray-700 font-bold mb-2">
           Student ID
          </label>
          <input
            type="text"
            id="studentID"
            value={studentID}
            onChange={(event) => setID(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus-within:shadow-lg "
          />
        </div>
        <div className="mb-1">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus-within:shadow-lg"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2 ">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus-within:shadow-lg"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus-within:shadow-lg"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="birthday" className="block text-gray-700 font-bold mb-2">
            Birthday
          </label>
          <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={(event) => setBirthday(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus-within:shadow-lg"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="degreeProgram" className="block text-gray-700 font-bold mb-2">
            Degree Program
          </label>
          <input
            type="text"
            id="degreeProgram"
            value={degreeProgram}
            onChange={(event) => setDegreeProgram(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus-within:shadow-lg"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="intake" className="block text-gray-700 font-bold mb-2">
            Intake
          </label>
          <input
            type="text"
            id="intake"
  value={intake}
            onChange={(event) => setIntake(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus-within:shadow-lg"
          />
        </div>
        
      </form>
      <button className="bg-sky-600 hover:bg-sky-200 text-white font-bold py-2 px-4  focus:outline-none focus-within:shadow-lg border rounded ">
          Cancel
        </button>
       
        <button className="bg-sky-600 hover:bg-sky-200 text-white font-bold py-2 px-4  focus:outline-none focus-within:shadow-lg ml-72 border rounded">
          Update
        </button>
      </div>
      
      
    );
  }
  
  export default UpdateStudent;