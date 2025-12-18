import React from "react";
import Navbar from "./components/navbar.jsx";
import Header from "./components/Header.jsx";
import SearchSection from "./components/SearchSection.jsx";
import UsersTable from "./components/UsersTable.jsx";

const App = () => {
  return (
    <div className="bg-accent-950 min-h-lvh">
      <Navbar />
      <Header />
      <SearchSection />
      <UsersTable />
    </div>
  );
};

export default App;
