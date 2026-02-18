import { getLetterPercentages } from "../utils/utils";
import LetterGroup from "./LetterGroup";

function LetterDensity({ text }) {
  let letterGroupDataArr;

  if (text) {
    console.log(text);
    letterGroupDataArr = Object.entries(getLetterPercentages(text));
  }

  return (
    <div>
      <h2>Letter Density</h2>

      <div>
        {text &&
          letterGroupDataArr
            // we're sorting for higher frequency to lower
            .sort((a, b) => b[1][0] - a[1][0])
            .map((lgArr, idx) => {
              const [letter, [count, percentage]] = lgArr;

              return (
                <LetterGroup
                  key={idx}
                  letter={letter}
                  count={count}
                  percentage={percentage}
                />
              );
            })}
      </div>
    </div>
  );
}

export default LetterDensity;
