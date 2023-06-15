import { createContext, useContext, useState} from 'react';

const ThemeContext = createContext(null);

export default function myApp(){
   const [theme, setTheme] = useState('light');
   
   return (
     <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={themr === 'dark'}
          onChange={(e) => {
          setTheme(e.terget.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
        </label>
     </ThemeContext.Provider>
     )
}

function Form({children}){
  return(
    <Panel title="Wellcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
    );
}

function Panel ({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return(
    <section className={className}>
      <h1>{title}</h1>
      {children}
      </selection>
    );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return(
    <button className={className}>
      {children}
    </button>
    );
}