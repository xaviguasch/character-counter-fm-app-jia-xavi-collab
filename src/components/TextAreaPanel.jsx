function TextAreaPanel({
  text,
  onSetText,
  areSpacesExcluded,
  onSetAreSpacesExcluded,
  isThereCharLimit,
  onSetIsThereCharLimit,
  showLimitAlert,
  charLimit,
  charLimitNum,
  onSetCharLimitNum,
  totalReadingTime,
}) {
  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={text}
        onChange={(e) => onSetText(e.target.value)}
        placeholder="Start typing here... (or paste your text)"
        className={`w-full h-50 border p-4 md:p-5 text-preset-3 rounded-xl 
          bg-background2 color-textarea
          ${
            showLimitAlert
              ? "border-orange shadow-lg shadow-red-500/20"
              : "border-border-textarea"
          }
          focus:border-purple focus:border-2
          active:border-purple active:border-2
          focus:shadow-lg active:shadow-lg`}
      />

      {showLimitAlert && (
        <p className="text-orange">
          Limit reached! Your text exceeds {charLimitNum} characters
        </p>
      )}

      <div className="flex flex-col md:flex-row gap-3 md:gap-6">
        <div className="flex flex-row gap-2.5 items-center">
          <input
            type="checkbox"
            id="spaces-checkbox"
            checked={areSpacesExcluded}
            onChange={(e) => onSetAreSpacesExcluded(e.target.checked)}
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
            checked={isThereCharLimit}
            onChange={(e) => onSetIsThereCharLimit(e.target.checked)}
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
                  className="px-3 py-1 text-preset-4 border w-13.75 rounded-md no-spinner"
                  onChange={(e) => onSetCharLimitNum(e.target.value)}
                />
              </div>
            )}
          </>
        </div>

        {text && (
          <p className="text-preset-4 color-text1 md:ml-auto">
            Aprox. reading time {totalReadingTime}
          </p>
        )}
      </div>
    </div>
  );
}

export default TextAreaPanel;
