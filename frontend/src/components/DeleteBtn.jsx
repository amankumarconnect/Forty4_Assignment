import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { MdDelete } from "react-icons/md";

const DeleteBtn = ({ userID }) => {
  const { deleteUser } = useContext(AppContext);

  return (
    <button
      onClick={() => deleteUser(userID)}
      className="text-red-400 cursor-pointer"
      title="Delete"
    >
      <MdDelete size={20} />
    </button>
  );
};

export default DeleteBtn;
