import React, { useState } from "react";

const SearchBar = ({city, setCity, handleSearch}) => {

  // console.log(city)

  return (
    <div className="flex justify-center my-8 md:mx-32 gap-4">
      <input
        type="text"
        placeholder="Enter City to Search"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="md:px-8 md:py-4 py-2 px-4 bg-white drop-shadow-lg rounded-md md:rounded-3xl border-2 border-sky-300 w-full"
      />
      <div
        onClick={handleSearch}
        className="bg-white drop-shadow-lg px-4 py-4 rounded-3xl border-2 border-sky-300 text-sky-500 hover:bg-sky-500 hover:text-white cursor-pointer"
      >
        Search
      </div>
    </div>
  );
};

export default SearchBar;
