import { useState } from "react";

import { getLetterPercentages } from "../utils/utils";
import LetterGroup from "./LetterGroup";

function LetterDensity({ text }) {
  const [showAll, setShowAll] = useState(false);

  let letterGroupDataArr;

  if (text) {
    console.log(text);
    letterGroupDataArr = Object.entries(getLetterPercentages(text));
  }

  const sorted = letterGroupDataArr?.slice().sort((a, b) => b[1][0] - a[1][0]);

  const visibleItems = showAll ? sorted : sorted?.slice(0, 5);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-preset-2">Letter Density</h2>

      <div className="flex flex-col gap-3">
        {text &&
          visibleItems?.map(([letter, [count, percentage]]) => (
            <LetterGroup
              key={letter}
              letter={letter}
              count={count}
              percentage={percentage}
            />
          ))}
      </div>

      {text && sorted?.length > 5 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-preset-3 text-left cursor-pointer"
        >
          {showAll ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}

export default LetterDensity;
