import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {

const { response, isLoading } = useSubmit();

const [state, setState] = useState({
  isOpen: false,
  // Type can be either "success" or "error"
  type: response.type,
  // Message to be displayed, can be any string
  message: response.message1,
});



console.log(...state, setState({isOpen: false}))
console.log(state.isOpen);
console.log(state.type);
console.log(state.message);

const handleAlert = (response, isLoading) => {
  if(isLoading){
    setState({
      isOpen: false,
      type: response.type,
      message: response.message1,
    })
  }else {
    return(
      setState({
        isOpen: true,
        type: response.type,
        message: response.message1,
      }))
  }

  console.log(state.isOpen);
  console.log(state.type);
  console.log(state.message)

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