import React from "react";

const Header = () => {
  return (
    <div className=" flex justify-between items-center p-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl text-accent-50">User Management Dashboard</h1>
        <p className="text-accent-600 font-bold">
          View, edit and manage user access across the platform.
        </p>
      </div>
      <div>
        <button className="bg-accent-500 text-accent-950 px-4 py-2 rounded-2xl font-medium shadow-md shadow-accent-700 cursor-pointer">
          + Add New User
        </button>
      </div>
    </div>
  );
};

export default Header;
