import React, { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const token = localStorage.getItem("token") || null;
  const [isAuth, setIsAuth] = useState(token);
  const [userName, setUserName] = useState("u");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || false;
    if (user) {
      const fristLater = user.fullName;
      setUserName(fristLater);
    } else {
      setUserName("U");
    }
  }, [isAuth]);

  return (
    <MyContext.Provider value={{ isAuth, setIsAuth, userName, setUserName }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyFunctions = () => useContext(MyContext);
