import { useState } from "react";

import { useTheme } from "./hooks/useTheme";
import LetterDensity from "./components/LetterDensity";
import TextAreaPanel from "./components/TextAreaPanel";
import iconMoon from "./assets/icon-moon.svg";
import iconSun from "./assets/icon-sun.svg";

import "./App.css";

function App() {
  // test line
  const [text, setText] = useState("");
  const [areSpacesExcluded, setAreSpacesExcluded] = useState(false);
  const [isThereCharLimit, setIsThereCharLimit] = useState(false);
  const [showLimitAlert, setShowLimitAlert] = useState(false);
  const [charLimitNum, setCharLimitNum] = useState(50);

  const { theme, toggleTheme } = useTheme();

  const charCount = areSpacesExcluded
    ? text.replace(/\s/g, "").length
    : text.length;

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  // Code of Jia:
  // function calcReadingTime(numOfWords) {
  //   const averageWPM = 250;

  //   const minutes = numOfWords / averageWPM;

  //   if (minutes < 1) {
  //     return "< 1 minute";
  //   }

  //   return `${Math.ceil(minutes)} min`;
  // }

  // const readingTime = calcReadingTime(wordCount);

  const WORDS_PER_MINUTE = 250;

  const readingTime = wordCount / WORDS_PER_MINUTE;

  const minutes = Math.round(readingTime);

  let totalReadingTime;

  if (minutes === 0) {
    totalReadingTime = "< 1 minute";
  } else {
    totalReadingTime = minutes;
  }

  const handleSetText = (newText) => {
    if (!isThereCharLimit) {
      setShowLimitAlert(false);
      setText(newText);
      return;
    }

    const newCharCount = areSpacesExcluded
      ? newText.replace(/\s/g, "").length
      : newText.length;

    if (newCharCount <= charLimitNum) {
      setShowLimitAlert(false);
      setText(newText);
    } else {
      setShowLimitAlert(true);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-red-500">Character Counter</h1>
        <img
          src={theme === "dark" ? iconSun : iconMoon}
          onClick={toggleTheme}
        />
      </div>

      <TextAreaPanel
        text={text}
        onSetText={handleSetText}
        areSpacesExcluded={areSpacesExcluded}
        onSetAreSpacesExcluded={setAreSpacesExcluded}
        showLimitAlert={showLimitAlert}
        isThereCharLimit={isThereCharLimit}
        onSetIsThereCharLimit={setIsThereCharLimit}
        charLimitNum={charLimitNum}
        onSetCharLimitNum={setCharLimitNum}
        readingTime={readingTime}
      />

      {text && <p>Aprox. reading time {totalReadingTime}</p>}
      <p>Character count {charCount}</p>
      <p>Word count {wordCount}</p>

      <LetterDensity text={text} />
    </div>
  );
}

export default App;

// import { useState } from "react";

// import TextAreaPanel from "./components/TextAreaPanel";

// import "./App.css";

// function App() {
//   const [text, setText] = useState("");
//   const [excludeSpaces, setExcludeSpaces] = useState(false);

//   const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
//   const sentenceCount =
//     text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length;

//   return (
//     <>
//       <h1>Analyze your text in real-time</h1>
//       <TextAreaPanel
//         text={text}
//         setText={setText}
//         excludeSpaces={excludeSpaces}
//         setExcludeSpaces={setExcludeSpaces}
//       />

//       <p>
//         Total Characters:
//         {text.length}
//       </p>
//       <p>Word Count: {wordCount}</p>
//       <p>Sentence Count: {sentenceCount}</p>
//     </>
//   );
// }

// export default App;
