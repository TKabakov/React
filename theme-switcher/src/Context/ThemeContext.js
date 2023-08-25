import { createContext, useState, useContext } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");
//default value can be undefined or null also
    return (
        <ThemeContext.Provider
            value={{
            theme,
            toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
            }}>
            { children }
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

