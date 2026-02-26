import { useState } from "react";

import Header from "./components/Header";
import TextAreaPanel from "./components/TextAreaPanel";
import LetterDensity from "./components/LetterDensity";

import "./App.css";
import CountArea from "./components/CountArea";

function App() {
  const [text, setText] = useState("");
  const [areSpacesExcluded, setAreSpacesExcluded] = useState(false);

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
    totalReadingTime = "<1 minute";
  } else if (minutes === 1) {
    totalReadingTime = "1 minute";
  } else {
    totalReadingTime = `${minutes} minutes`;
  }

  return (
    <div className="max-w-247.5 px-4 md:px-8 lg:px-0 pt-4 lg:pt-8 pb-8 md:pb-16 mx-auto flex flex-col gap-10 lg:gap-12">
      <Header />

      <TextAreaPanel
        text={text}
        onSetText={setText}
        areSpacesExcluded={areSpacesExcluded}
        onSetAreSpacesExcluded={setAreSpacesExcluded}
        totalReadingTime={totalReadingTime}
      />

      <CountArea
        text={text}
        areSpacesExcluded={areSpacesExcluded}
        wordCount={wordCount}
      />

      <LetterDensity text={text} />
    </div>
  );
}

export default App;
