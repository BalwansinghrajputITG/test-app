// src/provider/AdminProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const [activeTab, setActiveTab] = useState("add-question");

  // States for Add Question
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState(0);

  // States for User Management
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "user" },
    { id: 2, name: "Bob", role: "admin" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", role: "user" });

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const questionData = {
      question,
      options,
      correctOption,
    };
    console.log("Question Submitted:", questionData);
    // TODO: Send to backend API
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectOption(0);
  };

  const handleRoleChange = (id, newRole) => {
    const updated = users.map((user) =>
      user.id === id ? { ...user, role: newRole } : user
    );
    setUsers(updated);
  };

  const handleAddUser = () => {
    if (!newUser.name.trim()) return;
    const id = users.length + 1;
    setUsers([...users, { id, ...newUser }]);
    setNewUser({ name: "", role: "user" });
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setRole(parsedUser.role);
    }
  }, []);

  return (
    <AdminContext.Provider
      value={{
        user,
        role,
        setUser,
        setRole,
        users,
        setUsers,
        handleOptionChange,
        handleAddQuestion,
        handleRoleChange,
        handleAddUser,
        activeTab,
        setActiveTab,
        question,
        setQuestion,
        options,
        setOptions,
        correctOption,
        setCorrectOption,
        newUser,
        setNewUser,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminFunctions = () => useContext(AdminContext);
