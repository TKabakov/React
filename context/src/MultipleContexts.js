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
        function WelcomePanel({ children }) {
            const {currentUser} = useContext(CurrentUserContext);
            return (
                <Panel title="Welcome">
                    {currentUser !== null?
                    <Greeting/>:
                    <LoginForm />
                    }
                </Panel>
            );
        }

        function Greeting(){
            const {currentUser} = useContext(CurrentUserContext);

            return(
                <p>You logged in as {currentUser.name}.</p>
            )
        }

        function LoginForm(){
            const {setCurrentUser} = useContext(CurrentUserContext);
            const [firstName, setFirstName] = useState('');
            const [lastName, setLastName] = useState('');
            const canLogin = firstName !== '' && lastName !== '';
            return(
                <>
                <label>
                    First name{': '}
                    <input
                        required
                        value={firstName}
                        onChange={ setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Last name{': '}
                    <input
                        required
                        value={lastName}
                        onChange={ setLastName(e.target.value)}
                    />
                </label>
                <Button
                    disabled={!canLogin}
                    onClick={() =>
                        setCurrentUser({
                            name: firstName + " " + lastName
                        });
                    }
                >

                </>
            )
        }