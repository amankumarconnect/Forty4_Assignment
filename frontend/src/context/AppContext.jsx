import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("/api/users");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getUserById = async (id) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      return data;
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      return null;
    }
  };

  const createUser = async (userData) => {
    try {
      const { data } = await axios.post("/api/users", userData);
      setUsers((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AppContext.Provider
      value={{
        users,
        fetchUsers,
        getUserById,
        createUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
