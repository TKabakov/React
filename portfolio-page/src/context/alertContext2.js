import {createContext, useContext, useState} from "react";

const AlertContext = createContext(undefined);

export default function AlertProvider({ children }){
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: 'All good! Thank you for submition',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => 
            setState({ isOpen: true, type: 'error', message:'Ops! Something get wrong, please try again later!'}),
        onClose: (type, message) => 
            setState({ isOpen: false, type: 'success', message: "All good! Thank you for submition, we'll get back to you shortly!" }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
