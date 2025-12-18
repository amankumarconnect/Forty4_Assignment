import React from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";

const UsersSection = ({ users }) => {
  return (
    <div className="p-4">
      <table className="w-full">
        <thead className="bg-accent-950 text-accent-50">
          <tr className="border-b border-accent-950 text-left">
            <th className="p-2">User</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-accent-900 text-accent-300">
          {users.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-accent-700 border-b border-accent-200"
            >
              <td className="p-2">
                <div className="flex items-center gap-4">
                  <img
                    src={user.image}
                    alt={user.fullName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-accent-50 font-medium">
                      {user.fullName}
                    </span>
                    <span className="text-accent-400">@{user.username}</span>
                  </div>
                </div>
              </td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">
                <div className="flex gap-2 items-center">
                  <FaCircle
                    className={
                      user.status === "active"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  />{" "}
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-4">
                  <GrView />
                  <MdEditSquare />
                  <MdDelete />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersSection;
