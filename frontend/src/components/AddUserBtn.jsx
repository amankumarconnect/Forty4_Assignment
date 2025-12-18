import { Link } from "react-router";

const AddUserBtn = () => {
  return (
    <Link to="/add-user" className="text-prussian-blue-900 bg-smart-blue-600  p-2 rounded font-medium cursor-pointer hover:bg-prussian-blue-900 hover:text-smart-blue-600">
      + Add New User
    </Link>
  );
};

export default AddUserBtn;
