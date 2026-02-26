import { useState } from "react";

import Header from "./components/Header";
import TextAreaPanel from "./components/TextAreaPanel";
import LetterDensity from "./components/LetterDensity";

import "./App.css";
import CountArea from "./components/CountArea";

function App() {
  const [text, setText] = useState("");
  const [areSpacesExcluded, setAreSpacesExcluded] = useState(false);
  const [isThereCharLimit, setIsThereCharLimit] = useState(false);
  const [showLimitAlert, setShowLimitAlert] = useState(false);
  const [charLimitNum, setCharLimitNum] = useState(50);

  const charCount = areSpacesExcluded
    ? text.replace(/\s/g, "").length
    : text.length;

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const sentenceCount =
    text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length;

  const WORDS_PER_MINUTE = 250;

  const readingTime = wordCount / WORDS_PER_MINUTE;

  const minutes = Math.round(readingTime);

  let totalReadingTime;

  if (minutes === 0) {
    totalReadingTime = "<1 minute";
  } else if (minutes === 1) {
    totalReadingTime = "1 minute";
  } else {
    totalReadingTime = `${minutes} minutes`;
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
    <div className="max-w-247.5 px-4 md:px-8 lg:px-0 pt-4 lg:pt-8 pb-8 md:pb-16 mx-auto flex flex-col gap-10 lg:gap-12">
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
        totalReadingTime={totalReadingTime}
      />

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
