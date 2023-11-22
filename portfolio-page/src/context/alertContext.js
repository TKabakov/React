import {createContext, useContext, useState} from "react";
import useSubmit from "../hooks/useSubmit";

const AlertContext = createContext(undefined);
import {createContext, useContext, useEffect, useState} from "react";
import useSubmit from "../hooks/useSubmit";
import ContactMeSection from "../components/ContactMeSection";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {

//const { response, isLoading, submit } = useSubmit();
console.log(ContactMeSection);

const { response, isLoading, submit } = ContactMeSection;
console.log(ContactMeSection.response.type);

const [state, setState] = useState({
  isOpen: false,
  // Type can be either "success" or "error"
  type: response.type,
  // Message to be displayed, can be any string
  message: response.message1,
});

//call submit() ???
//useEffect may be used

console.log("isOpen is : " , state.isOpen);
console.log("isLoading is : " , isLoading);
console.log("type is : ", state.type);

function handleAlert (response, isLoading) {
  if(isLoading){
    setState({
      isOpen: false,
      type: response.type,
      message: response.message1,
    })
  }else {
    return(
      setState({
        isOpen: false,
        type: response.type,
        message: response.message1,
      }))
  }
}

useEffect(() => {
  handleAlert(response, isLoading)
},[]
)

console.log("isOpen becomes : ", state.isOpen);
console.log("isLoading becomes : " , isLoading);
console.log("type is : ", state.type);
//console.log(state.message)

return (
  <AlertContext.Provider
    value={state}
  >
    {children}
  </AlertContext.Provider>
);
};

export const useAlertContext = () => useContext(AlertContext);