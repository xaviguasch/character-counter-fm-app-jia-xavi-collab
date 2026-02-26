import { useTheme } from "../hooks/useTheme";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import lightLogo from "../assets/logo-light-theme.svg";
import darkLogo from "../assets/logo-dark-theme.svg";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between items-center">
        <div className="w-46.25 h-7.5 md:w-61.25 md:h-10">
          <img
            src={theme === "dark" ? darkLogo : lightLogo}
            className="w-full h-full "
          />
        </div>
        <button
          onClick={toggleTheme}
          className="w-8 h-8 md:w-11 md:h-11 rounded-sm mdrounded-lg flex items-center justify-center
           bg-background2 cursor-pointer"
        >
          <img
            src={theme === "dark" ? iconSun : iconMoon}
            className="w-5 h-5 md:w-5.5 md:h-5.5"
          />
        </button>
      </div>

      <h1 className="text-preset-1 text-header text-center">
        Analyze your text <span className="inline md:block">in real-time.</span>
      </h1>
    </div>
  );
}

export default Header;
