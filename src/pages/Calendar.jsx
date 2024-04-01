import React from 'react';

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startingDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="w-1/2 bg-blue-100 fixed h-2/3 rounded-lg px-36  ml-96 border-2 shadow-inner shadow-blue-500/50 mt-24 gap-x-48 ">
    <h1 className="text-2xl text-black ml-44">Admin </h1>
    <div className="p-4 bg-white rounded-lg shadow-md mt-10">
      <div className="flex justify-between text-gray-600 mb-4">
        <div>
          {currentMonth === 0 ? (
            <span>January {currentYear}</span>
          ) : currentMonth === 1 ? (
            <span>February {currentYear}</span>
          ) : currentMonth === 2 ? (
            <span>March {currentYear}</span>
          ) : currentMonth === 3 ? (
            <span>April {currentYear}</span>
          ) : currentMonth === 4 ? (
            <span>May {currentYear}</span>
          ) : currentMonth === 5 ? (
            <span>June {currentYear}</span>
          ) : currentMonth === 6 ? (
            <span>July {currentYear}</span>
          ) : currentMonth === 7 ? (
            <span>August {currentYear}</span>
          ) : currentMonth === 8 ? (
            <span>September {currentYear}</span>
          ) : currentMonth === 9 ? (
            <span>October {currentYear}</span>
          ) : currentMonth === 10 ? (
            <span>November {currentYear}</span>
          ) : (
            <span>December {currentYear}</span>
          )}
        </div>
        <div>
          <button className="px-2 py-1 rounded-md bg-gray-300">Prev</button>
          <button className="px-2 py-1 rounded-md bg-gray-300 ml-2">
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-gray-500">
            {day}
          </div>
        ))}
        {Array(startingDayOfMonth)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="text-center text-gray-400">
              —
            </div>
          ))}
        {days.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Calendar;