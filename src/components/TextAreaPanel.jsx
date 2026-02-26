import { useState } from "react";
import infoIcon from "../assets/icon-info.svg";

function TextAreaPanel({
  text,
  onSetText,
  areSpacesExcluded,
  onSetAreSpacesExcluded,
  totalReadingTime,
}) {
  const [isThereCharLimit, setIsThereCharLimit] = useState(false);
  const [showLimitAlert, setShowLimitAlert] = useState(false);
  const [charLimitNum, setCharLimitNum] = useState(50);

  const handleSetText = (newText) => {
    if (!isThereCharLimit) {
      setShowLimitAlert(false);
      onSetText(newText);
      return;
    }

    const newCharCount = areSpacesExcluded
      ? newText.replace(/\s/g, "").length
      : newText.length;

    if (newCharCount <= charLimitNum) {
      setShowLimitAlert(false);
      onSetText(newText);
    } else {
      setShowLimitAlert(true);
    }
  };

  return (
    <div className="">
      <textarea
        value={text}
        onChange={(e) => handleSetText(e.target.value)}
        placeholder="Start typing here... (or paste your text)"
        className={`w-full h-50 border p-4 md:p-5 text-preset-3 text-textarea placeholder-textarea 
          rounded-xl cursor-pointer bg-background2 color-textarea
          ${
            showLimitAlert && isThereCharLimit
              ? "border-orange focus:border-orange active:border-orange shadow-lg shadow-red-500/20 "
              : "border-border-textarea focus:border-purple active:border-purple"
          }
           focus:border-2 focus:outline-none focus:shadow-lg
           active:border-2 active:shadow-lg
          `}
      />

      {showLimitAlert && isThereCharLimit && (
        <p className="text-danger mt-1 flex gap-2">
          <img src={infoIcon} />
          <span>
            Limit reached! Your text exceeds {charLimitNum} characters
          </span>
        </p>
      )}

      <div className="mt-4 h-[29px] flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <div className="flex flex-row gap-2.5 items-center">
          <input
            type="checkbox"
            id="spaces-checkbox"
            className="checkbox"
            checked={areSpacesExcluded}
            onChange={(e) => onSetAreSpacesExcluded(e.target.checked)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onSetAreSpacesExcluded((prev) => !prev);
              }
            }}
          />
          <label
            htmlFor="spaces-checkbox"
            className="text-preset-4 color-text1"
          >
            Exclude spaces
          </label>
        </div>

        <div className="flex flex-row gap-2.5 items-center">
          <input
            type="checkbox"
            id="char-limit-checkbox"
            className="checkbox"
            checked={isThereCharLimit}
            onChange={(e) => setIsThereCharLimit(e.target.checked)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setIsThereCharLimit((prev) => !prev);
              }
            }}
          />
          <label
            htmlFor="char-limit-checkbox"
            className="text-preset-4 color-text1"
          >
            Set Character Limit
          </label>

          <>
            {isThereCharLimit && (
              <div>
                <input
                  type="number"
                  id="char-limit-num"
                  value={charLimitNum}
                  className="px-3 py-1 text-center text-preset-4 border border-[var(--color-neutral-600)] 
                  w-13.75 h-7.25 rounded-md no-spinner"
                  onChange={(e) => setCharLimitNum(e.target.value)}
                />
              </div>
            )}
          </>
        </div>

        <p className="text-preset-4 color-text1 md:ml-auto">
          Approx. reading time: {text ? totalReadingTime : "0 minute"}
        </p>
      </div>
    </div>
  );
}

export default TextAreaPanel;
