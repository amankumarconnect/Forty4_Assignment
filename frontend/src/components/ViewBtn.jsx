import React from "react";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router";

const ViewBtn = ({ userID }) => {
  return (
    <Link to={`/view-user/${userID}`} className="text-twilight-indigo-300 hover:text-green-500 cursor-pointer" title="View">
      <IoMdEye size={18} />
    </Link>
  );
};

export default ViewBtn;
