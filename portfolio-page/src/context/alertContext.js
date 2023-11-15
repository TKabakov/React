import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

export const AlertContext = createContext(undefined);

const { response } = useSubmit();

export const AlertProvider = ({ children }, { response }) => {

const [state, setState] = useState({
  isOpen: false,
  // Type can be either "success" or "error"
  type: 'success',
  // Message to be displayed, can be any string
  message: '',
});




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