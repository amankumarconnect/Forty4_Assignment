import { Outlet } from "react-router";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";

const Layout = () => {
  return (
    <div className="bg-twilight-indigo-300 flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
