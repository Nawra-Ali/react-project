// SearchBar.jsx
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
    console.log("Current search term:", event.target.value);
};

const handleSubmit = (event: React.InputEvent<HTMLInputElement>): void => {
    event.preventDefault(); // Prevent default form submission
    console.log("Submitted search term:", searchTerm);
    // You can add further logic here to handle the search action
};


  return (
<div className="relative w-full mt-5 px-4 pt-5">
  {/* Search icon */}
  <div className="absolute inset-y-0 left-8  pt-5 flex items-center">
    <FaSearch className="w-4 h-4 text-gray-500" />
  </div>

  {/* Input */}
  <input
    type="text"
    placeholder="Search orders by number, type or location..."
    value={searchTerm}
    onChange={handleChange}
    onSubmit={handleSubmit}
    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
  );
};
