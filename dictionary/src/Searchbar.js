import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    onSearch(searchTerm);
  }

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="search for a word"
        className="px-4 py-2 rounded-md shadow-md focus:outline-none w-full focus:ring focus:ring-[#9163cb]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-[#f72585] hover:bg-[#9163cb] transition-all duration-700 ease-in-out text-white rounded-md shadow-md"
        onClick={handleSearch}
      >
        search
      </button>
    </div>
  );
}

export default SearchBar;
