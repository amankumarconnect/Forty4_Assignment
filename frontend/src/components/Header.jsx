import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-1 px-8 py-4">
      <h1 className="font-bold text-3xl text-prussian-blue-900">User Management</h1>
      <p className="text-twilight-indigo-700 font-bold">
        Manage access, view details, and update user information.
      </p>
    </div>
  );
};

export default Header;
