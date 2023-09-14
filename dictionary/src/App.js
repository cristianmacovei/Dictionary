import React, { useState } from "react";
import CardWithSearch from "./CardWithSearch"; // Import the CardWithSearch component
import Dictionary from "./Dictionary";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  // Handler function for search
  const handleSearch = (searchTerm) => {
    setSearchKeyword(searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      {/* Render the CardWithSearch component */}
      <CardWithSearch onSearch={handleSearch}>
        {/* Content to be displayed within the card */}
        <div>
          <Dictionary searchKeyword={searchKeyword} />
        </div>
      </CardWithSearch>
    </div>
  );
};

export default App;
