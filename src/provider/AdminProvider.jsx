// src/provider/AdminProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { deleteUserById, getAllUser } from "../servics/api";

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  // Current logged-in user
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  // Active tab in admin panel
  const [activeTab, setActiveTab] = useState("add-question");

  // States for Add Question
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState(0);

  // States for User Management
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", role: "user" });

  // set user type

  const [userType, setUserType] = useState("user");

  // Handle option input change
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  // Handle adding a new question
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

  // Handle changing a user's role
  const handleRoleChange = (id, newRole) => {
    const updated = users.map((user) =>
      user.id === id ? { ...user, role: newRole } : user
    );
    setUsers(updated);
  };

  // Handle adding a new user
  const handleAddUser = () => {
    if (!newUser.name.trim()) return;
    const id = users.length + 1; // simple ID assignment
    setUsers([...users, { id, ...newUser }]);
    setNewUser({ name: "", role: "user" });
  };

  // Load current user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setRole(parsedUser.role);
    }
  }, []);

  // Fetch all users from API on mount

  const handleUserType = (v) => {
    setUserType(v);
  };

  const fetchUsers = async () => {
    try {
      const data = await getAllUser(userType);
      setUsers(data.Users);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [userType]);

  const handleUserDelete = async (otherUserId, adminId) => {
    if (otherUserId == adminId) {
      alert("your are not deleted yourshelf");
      return;
    }

    const data = await deleteUserById(otherUserId);
    console.log(data.msg);
    alert(data.msg);
    fetchUsers();
  };

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
        userType,
        handleUserType,
        handleUserDelete,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminFunctions = () => useContext(AdminContext);
