import React from "react";
import { IoFilter } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

const SearchSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center p-8 gap-6">
      <div className="bg-accent-900 text-accent-50 border-2 border-accent-700 rounded-2xl flex items-center gap-2 p-2 px-4 w-full md:max-w-md">
        <IoMdSearch />
        <input
          type="text"
          placeholder="Search users by name, email..."
          className="w-full focus:outline-0"
        />
      </div>
      <div className="flex items-center justify-center gap-2 bg-accent-900 text-accent-50 border-2 border-accent-700 rounded-2xl p-2 px-4 cursor-pointer w-full md:w-fit">
        <IoFilter />
        <span className="">Filter</span>
      </div>
    </div>
  );
};

export default SearchSection;
