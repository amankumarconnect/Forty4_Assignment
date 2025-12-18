import React from "react";
import { MdEditSquare } from "react-icons/md";

const EditBtn = ({ userID }) => {
  return (
    <button className="text-accent-400 hover:text-accent-200" title="Edit">
      <MdEditSquare size={20} />
    </button>
  );
};

export default EditBtn;
