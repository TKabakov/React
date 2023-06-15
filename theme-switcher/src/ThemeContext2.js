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
     )
}