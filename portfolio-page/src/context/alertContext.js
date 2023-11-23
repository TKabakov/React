import {createContext, useContext, useState} from "react";
<<<<<<< HEAD
import useSubmit from "../hooks/useSubmit";

const AlertContext = createContext(undefined);
import {createContext, useContext, useEffect, useState} from "react";
import useSubmit from "../hooks/useSubmit";
import ContactMeSection from "../components/ContactMeSection";
=======
>>>>>>> 62bb0c45fc2f0e9eeab9981c02fe9bd4716704a1

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  });

  let value = 'hello';

  return (
    <AlertContext.Provider
      value={value}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
