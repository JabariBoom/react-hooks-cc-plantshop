import React from "react";

function Search({ searchPlant, setsearchPlant }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlant}
        onChange={(e) => setsearchPlant(e.target.value)}
      />
    </div>
  );
}

export default Search;