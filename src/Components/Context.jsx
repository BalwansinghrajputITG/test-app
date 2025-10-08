import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  
  return (
    <MyContext.Provider value={{children}}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyFunctions = () => {
  return useContext(MyContext);
};
