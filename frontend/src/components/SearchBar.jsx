import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="bg-accent-900 text-accent-50 rounded-2xl flex items-center gap-2 p-2 px-4 w-full md:max-w-md">
      <IoMdSearch />
      <input
        type="text"
        placeholder="Search users by name or email..."
        className="w-full focus:outline-0"
      />
    </div>
  );
};

export default SearchBar;
