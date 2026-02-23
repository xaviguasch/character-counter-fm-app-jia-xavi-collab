import { useState } from "react";

import Header from "./components/Header";
import TextAreaPanel from "./components/TextAreaPanel";
import LetterDensity from "./components/LetterDensity";

import "./App.css";
import CountArea from "./components/CountArea";

function App() {
  // test line
  const [text, setText] = useState("");
  const [areSpacesExcluded, setAreSpacesExcluded] = useState(false);
  const [isThereCharLimit, setIsThereCharLimit] = useState(false);
  const [showLimitAlert, setShowLimitAlert] = useState(false);
  const [charLimitNum, setCharLimitNum] = useState(50);

  const charCount = areSpacesExcluded
    ? text.replace(/\s/g, "").length
    : text.length;

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  // PLACEHOLDER!!!! Pending
  const sentenceCount = 60;

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
    <div className="px-4">
      <Header />

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
      {/* <p>Character count {charCount}</p>
      {/* {text && <p>Aprox. reading time {totalReadingTime}</p>}
      <p>Character count {charCount}</p>
      <p>Word count {wordCount}</p> */}

      <CountArea
        charCount={charCount}
        wordCount={wordCount}
        sentenceCount={sentenceCount}
      />

      <LetterDensity text={text} />
    </div>
  );
}

export default App;
