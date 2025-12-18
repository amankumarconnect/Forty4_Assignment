import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="bg-twilight-indigo-600 text-prussian-blue-50 rounded flex items-center gap-2 p-2  w-full md:max-w-md">
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
