import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import Switch from "./Switch";

const Title = ({ children }) => {
  const { theme } = useTheme();

  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
      >
        { children }
    </h2>
  );
};



}

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
