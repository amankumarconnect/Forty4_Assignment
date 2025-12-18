import React from "react";
import Navbar from "./components/navbar.jsx";
import Header from "./components/Header.jsx";
import SearchSection from "./components/SearchSection.jsx";
import UsersSection from "./components/UsersSection.jsx";

const App = () => {
  return (
    <div className="bg-accent-950 min-h-lvh">
      <Navbar />
      <Header />
      <SearchSection />
      <UsersSection
        users={[
          {
            id: 1,
            fullName: "Sarah Jenkins",
            username: "sarahj",
            email: "sarah.j@company.com",
            image: "https://i.pravatar.cc/150?u=sarah",
            role: "Admin",
            status: "active",
          },
          {
            id: 2,
            fullName: "Michael Chen",
            username: "michaelc",
            email: "m.chen@company.com",
            image: "https://i.pravatar.cc/150?u=michael",
            role: "Manager",
            status: "active",
          },
          {
            id: 3,
            fullName: "Elena Rodriguez",
            username: "elenar",
            email: "elena.rod@company.com",
            image: "https://i.pravatar.cc/150?u=elena",
            role: "User",
            status: "inactive",
          },
          {
            id: 4,
            fullName: "James Wilson",
            username: "jamesw",
            email: "j.wilson@company.com",
            image: "https://i.pravatar.cc/150?u=james",
            role: "User",
            status: "active",
          },
          {
            id: 5,
            fullName: "Amara Okafor",
            username: "amarao",
            email: "amara.o@company.com",
            image: "https://i.pravatar.cc/150?u=amara",
            role: "Manager",
            status: "inactive",
          },
        ]}
      />
    </div>
  );
};

export default App;
