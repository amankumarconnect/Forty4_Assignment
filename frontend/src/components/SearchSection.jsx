import React from "react";
import AddUserBtn from "./AddUserBtn.jsx";
import FilterBtn from "./FilterBtn.jsx";
import SearchBar from "./SearchBar.jsx";

const SearchSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center px-8 py-4 gap-6">
      <SearchBar />
      <div className="flex gap-4">
        <FilterBtn />
        <AddUserBtn />
      </div>
    </div>
  );
};

export default SearchSection;
