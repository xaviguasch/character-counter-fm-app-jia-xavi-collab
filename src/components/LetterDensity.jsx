import { useState } from "react";
import { getLetterPercentages } from "../utils/utils";
import LetterGroup from "./LetterGroup";

function LetterDensity({ text }) {
  const [showAll, setShowAll] = useState(false);

  let letterGroupDataArr;

  if (text) {
    letterGroupDataArr = Object.entries(getLetterPercentages(text));
  }

  const sortedLetters = letterGroupDataArr
    ?.slice()
    .sort((a, b) => b[1][0] - a[1][0]);

  const displayedLetters = showAll ? sortedLetters : sortedLetters?.slice(0, 5);

  return (
    <div className="">
      <h2 className="text-preset-2 mt-6 mb-5">Letter Density</h2>

      <ul className="flex flex-col gap-3 mb-5">
        {text &&
          displayedLetters.map(([letter, [count, percentage]]) => {
            return (
              <LetterGroup
                key={letter}
                letter={letter}
                count={count}
                percentage={percentage}
              />
            );
          })}
      </ul>

      {letterGroupDataArr?.length > 5 && (
        <button
          className="text-preset-3 cursor-pointer flex items-center gap-2 "
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "See less" : "See more"}

          {/* chevron-down */}
          <svg
            className={`w-4.5 h-5.25 transition-transform duration-300 ${
              showAll ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default LetterDensity;
