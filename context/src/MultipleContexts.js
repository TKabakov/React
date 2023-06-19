import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

const CurrentUserContext = createContext(null);

export default function MultipleContexts(){
 
    const [theme, setTheme] = useState('light');
    const [currentUser, setCurrentUser] = useState(null);

    return(
        <ThemeContext.Provider value = {theme}>
            <CurrentUserContext.Provider
                value={{
                    currentUser,
                    setCurrentUser
                }}
                >
                   <WelcomePanel />
                   <label>
                        <input
                        type='checkbox'
                        checked={theme === 'dark'}
                        onChange={(e) => {
                            setTheme(e.target.checked ? 'dark' : 'light')
                        }}
                        />
                        Use dark mode
                    </label> 
                </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    )  
}