import React from "react";
import { IoMdEye } from "react-icons/io";

const ViewBtn = ({ userID }) => {
  return (
    <button className="text-blue-400 cursor-pointer" title="View">
      <IoMdEye size={18} />
    </button>
  );
};

export default ViewBtn;
