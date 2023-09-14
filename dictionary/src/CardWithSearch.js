import React from "react";
import SearchBar from "./Searchbar"; // Import your SearchBar component

const CardWithSearch = ({ children, onSearch }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#b3e9c7] z-50">
      <div className=" overflow-y-scroll w-3/4 h-3/4 bg-gray-100/70 rounded-md shadow-lg overflow-hidden">
        {/* SearchBar at the top */}
        <div className="bg-gray-200 p-4">
          <SearchBar onSearch={onSearch} />
        </div>
        {/* Content inside the card */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default CardWithSearch;
