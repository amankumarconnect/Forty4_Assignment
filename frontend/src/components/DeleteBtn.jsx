import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteBtn = ({ userID }) => {
  const { deleteUser } = useContext(AppContext);

  return (
    <button
      onClick={() => deleteUser(userID)}
      className="text-accent-400 hover:text-accent-200"
      title="Delete"
    >
      <MdDelete size={20} />
    </button>
  );
};

export default DeleteBtn;
