import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

export const AlertContext = createContext(undefined);

const { response } = useSubmit();

export const AlertProvider = ({ children }, { response }) => {

const [ state, setState] = useState(''); 

  setState('Hello');


console.log(state);

return (
  <AlertContext.Provider
    value={{
      ...state,
      onOpen: (type, message) => setState({ isOpen: true, type, message }),
      onClose: () => setState({ isOpen: false, type: '', message: '' }),
    }}
  >
    {children}
  </AlertContext.Provider>
);
};