import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  

  return (
    <AlertContext.Provider
      value={{
        
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};