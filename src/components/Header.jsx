import { useTheme } from "../hooks/useTheme";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import lightLogo from "../assets/logo-light-theme.svg";
import darkLogo from "../assets/logo-dark-theme.svg";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container pt-8 ">
      <div className="mb-[48px] flex justify-between items-center">
        <img src={theme === "dark" ? darkLogo : lightLogo} />
        <div
          onClick={toggleTheme}
          className="w-[44px] h-[44px] rounded-lg flex items-center justify-center bg-bg-secondary"
        >
          <img src={theme === "dark" ? iconSun : iconMoon} />
        </div>
      </div>
      <h1 className="text-text1 text-preset-1 text-center mb-12">
        Analyze your text <span className="block">in real-time</span>
      </h1>
    </div>
  );
}

export default Header;
