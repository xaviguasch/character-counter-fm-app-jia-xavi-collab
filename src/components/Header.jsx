import { useTheme } from "../hooks/useTheme";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import lightLogo from "../assets/logo-light-theme.svg";
import darkLogo from "../assets/logo-dark-theme.svg";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div className="flex justify-between items-center">
        <img src={theme === "dark" ? darkLogo : lightLogo} />
        <img
          src={theme === "dark" ? iconSun : iconMoon}
          onClick={toggleTheme}
        />
      </div>
      <h1 className="text-text1 text-preset-1">
        Analyze your text <span className="block">in real-time</span>
      </h1>
    </div>
  );
}

export default Header;
