import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {

const { response } = useSubmit();

const [state, setState] = useState({
  isOpen: false,
  // Type can be either "success" or "error"
  type: response.type,
  // Message to be displayed, can be any string
  message: response.message1,
});

console.log(state.isOpen);
console.log(state.type);
console.log(state.message);

const handleAlert = () => {
  e.prevntDefault();
  if(isLoading){
    setState({
      
    })
  }

}

return (
  <AlertContext.Provider
    value={state}
  >
    {children}
  </AlertContext.Provider>
);
};

export const useAlertContext = () => useContext(AlertContext);