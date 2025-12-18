import React from "react";
import { MdEditSquare } from "react-icons/md";

const EditBtn = ({ userID }) => {
  return (
    <button className="text-yellow-400 cursor-pointer" title="Edit">
      <MdEditSquare size={20} />
    </button>
  );
};

export default EditBtn;
