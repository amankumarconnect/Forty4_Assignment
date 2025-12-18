import React from "react";

const SearchSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center p-8 gap-6">
      <div className="bg-accent-900 text-accent-50 border-2 border-accent-700 rounded-2xl flex items-center gap-2 p-2 px-4 w-full md:max-w-md">
        <img src="search.png" alt="Search icon" className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search users by name, email..."
          className="w-full focus:outline-0"
        />
      </div>
      <div className="flex items-center justify-center gap-2 bg-accent-900 text-accent-50 border-2 border-accent-700 rounded-2xl p-2 px-4 cursor-pointer w-full md:w-fit">
        <img src="filter.png" alt="Filter icon" className="w-5 h-5" />
        <span className="">Filter</span>
      </div>
    </div>
  );
};

export default SearchSection;
