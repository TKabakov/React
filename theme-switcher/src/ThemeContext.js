import { createContext, useState, useContext } from "react";

const ThemeContext = createContext(undefined);

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

