import { Routes, Route } from "react-router";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import AddUser from "./pages/AddUser.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add-user" element={<AddUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
