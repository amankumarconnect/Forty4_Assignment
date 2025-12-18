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

  const updateUser = async (id, userData) => {
    try {
      const { data } = await axios.put(`/api/users/${id}`, userData);
      setUsers((prev) => prev.map((user) => (user._id === id ? data : user)));
      return data;
    } catch (error) {
      console.error(`Error updating user ${id}:`, error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers((prev) => prev.filter((user) => user._id !== id));
      return true;
    } catch (error) {
      console.error(`Error deleting user ${id}:`, error);
      return false;
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
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
