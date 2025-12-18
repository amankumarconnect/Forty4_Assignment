import React from "react";
import { IoMdEye } from "react-icons/io";

const ViewBtn = ({ userID }) => {
  return (
    <button className="text-accent-400 hover:text-accent-200" title="View">
      <IoMdEye size={18} />
    </button>
  );
};

export default ViewBtn;
