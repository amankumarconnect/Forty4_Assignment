import React from "react";
import { Link } from "react-router";
import { MdEditSquare } from "react-icons/md";

const EditBtn = ({ userID }) => {
  return (
    <Link to={`/edit-user/${userID}`} className="text-twilight-indigo-300 hover:text-yellow-400 cursor-pointer" title="Edit">
      <MdEditSquare size={20} />
    </Link>
  );
};

export default EditBtn;
