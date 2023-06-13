import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={e => e.target.theme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
