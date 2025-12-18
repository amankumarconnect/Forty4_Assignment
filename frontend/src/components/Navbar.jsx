import React from "react";

const Navbar = () => {
  return (
    // use tailwind
    <nav className="flex items-start gap-4 p-4 bg-accent-950 shadow-sm shadow-accent-300">
      <div className="w-10 h-10 cursor-pointer flex items-center gap-2">
        <img src="/logo.png" alt="Site Logo" className="rounded-xl"/>
        <h1 className="text-accent-500 font-bold text-2xl">Forty4</h1>
      </div>
    </nav>
  );
};

export default Navbar;
