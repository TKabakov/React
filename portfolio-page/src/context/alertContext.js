import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

const AlertContext = createContext(undefined);



export const AlertProvider = ({ children }) => {

  const {isLoading, response, submit} = useSubmit();

  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: response.type,
    // Message to be displayed, can be any string
    title: response.title,
    message1: response.message1,
    message2: response.message2,
  });

  console.log(state.type);
  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
      console.log(state.onOpen.type)
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);