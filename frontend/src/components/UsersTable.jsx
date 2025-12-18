import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import ViewBtn from "./ViewBtn.jsx";
import EditBtn from "./EditBtn.jsx";
import DeleteBtn from "./DeleteBtn.jsx";

const UsersTable = () => {
  const { users } = useContext(AppContext);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-accent-950 text-accent-50 rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-accent-900 text-accent-200 uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Company</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm font-light">
          {users.map((user) => (
            <tr
              key={user._id}
              className="border-b border-accent-800 hover:bg-accent-900 transition-colors duration-200"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="font-medium">{user.name}</div>
              </td>
              <td className="py-3 px-6 text-left">
                <span>{user.email}</span>
              </td>
              <td className="py-3 px-6 text-left">
                <span>{user.company}</span>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center gap-4">
                  <ViewBtn userID={user._id} />
                  <EditBtn userID={user._id} />
                  <DeleteBtn userID={user._id} />
                </div>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="4" className="py-6 text-center text-accent-300">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
