import { useTheme } from "../hooks/useTheme";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import lightLogo from "../assets/logo-light-theme.svg";
import darkLogo from "../assets/logo-dark-theme.svg";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div className="mb-[48px] flex justify-between items-center">
        <div className="w-[185px] h-[30px] md:w-[245px] md:h-[40px]">
          <img
            src={theme === "dark" ? darkLogo : lightLogo}
            className="w-full h-full"
          />
        </div>
        <div
          onClick={toggleTheme}
          className="w-[32px] h-[32px] md:w-[44px] md:h-[44px] rounded-sm mdrounded-lg flex items-center justify-center bg-background2"
        >
          <img
            src={theme === "dark" ? iconSun : iconMoon}
            className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]"
          />
        </div>
      </div>
      <h1 className="text-preset-1 text-text1 text-center mb-12 ">
        Analyze your text <span className="inline md:block">in real-time</span>
      </h1>
    </div>
  );
}

export default Header;
