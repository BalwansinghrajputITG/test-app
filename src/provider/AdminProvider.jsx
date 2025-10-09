// src/provider/AdminProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setRole(parsedUser.role);
    }
  }, []);

  return (
    <AdminContext.Provider value={{ user, role, setUser, setRole }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminFunctions = () => useContext(AdminContext);
