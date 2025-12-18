import React from "react";
import { IoFilter } from "react-icons/io5";

const FilterBtn = () => {
  return (
    <button className="flex items-center justify-center gap-2 bg-accent-900 text-accent-50 rounded-2xl cursor-pointer w-fit px-3">
      <IoFilter />
      <span>Filter</span>
    </button>
  );
};

export default FilterBtn;
