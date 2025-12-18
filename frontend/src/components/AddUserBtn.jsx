import { Link } from "react-router";

const AddUserBtn = () => {
  return (
    <Link to="/add-user" className="bg-accent-500 text-accent-950 px-4 py-2 rounded-2xl font-medium cursor-pointer">
      + Add New User
    </Link>
  );
};

export default AddUserBtn;
