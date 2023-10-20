import {createContext, useContext, useState} from "react";
import LandingSection from "../components/ContactMeSection";

const AlertContext = createContext({
  isOpen: false,
  // Type can be either "success" or "error"
  type: 'success',
  // Message to be displayed, can be any string
  message: 'All good! Thank you for submition',
});

export const AlertProvider = ({children}) => {
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
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      <LandingSection/>
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
