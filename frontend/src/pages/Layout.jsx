import { Outlet } from "react-router";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";

const Layout = () => {
  return (
    <div className="bg-accent-950 min-h-screen">
      <Navbar />
      <Outlet className="p-4" />
      <Footer />
    </div>
  );
};

export default Layout;
