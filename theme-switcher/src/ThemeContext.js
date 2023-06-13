import { createContext, useState, useContext } from "react";

const ThemeContext = React.createContext(undefined);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");

    return <ThemeContext.Provider
        value={{
            theme,
            toggleTheme 
        }
            }>
         { children }
    </ThemeContext.Provider>;
}
   

export const useTheme = () => ({ theme: "light" });



export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider value="Reed">
      <User />
    </UserContext.Provider>
  )
}

function User() {
  const value = React.useContext(UserContext);  
    
  return <h1>{value}</h1>;
}