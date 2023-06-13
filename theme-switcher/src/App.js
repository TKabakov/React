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

const Paragraph = ({ children }) => {
  const { theme } = useTheme();

  return (
    <p
      style={{
        color: theme === "light" ? "black" : "light",
      }}
      >
        { children }
      </p>
  );
}



}

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
