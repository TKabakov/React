import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

const AlertContext = createContext(undefined);

//const { isOpen, type, message, onClose } = useAlertContext();

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  });

  const {isLoading, response, submit} = useSubmit();

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ 
          isOpen: true, 
          type: 'success', 
          message: response.message}),
        onClose: () => setState({ 
          isOpen: false, 
          type: '', 
          message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);