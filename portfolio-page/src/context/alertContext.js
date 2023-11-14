import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

const AlertContext = createContext(undefined);



export const AlertProvider = ({ children }) => {

  const {isLoading, response, submit} = useSubmit();

  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: "",
    // Message to be displayed, can be any string
    title: "",
    message1: "",
    message2: "",
  });

  const value = ({response}) => {
    setState({
      ...state,
      type: response.type,
    })
  }

  console.log(response.type);
  console.log(state);

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message1) => {setState({ isOpen: true, type: '', message1:'' })},
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}

    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);