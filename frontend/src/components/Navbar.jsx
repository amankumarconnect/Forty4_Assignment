import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    // use tailwind
    <nav className="flex items-start gap-4 p-4 bg-prussian-blue-900">
      <Link to="/" className="cursor-pointer flex items-center gap-2">
        <img src="/logo.png" alt="Site Logo" className="w-10 h-10 rounded-xl" />
        <h1 className="text-twilight-indigo-400 font-bold text-2xl">Forty4</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
