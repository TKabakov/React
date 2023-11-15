import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

export const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {

const [ state, setState] = useState(''); 

  setState('Hello');


console.log(state);

  return (
    <AlertContext.Provider
      value={state}
    >
      {children}
    </AlertContext.Provider>
  );
};