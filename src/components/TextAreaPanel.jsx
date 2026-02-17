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
}) {
  return (
    <div>
      <h2>TextAreaPanel</h2>

      <textarea
        value={text}
        onChange={(e) => onSetText(e.target.value)}
        placeholder="Start writing..."
        className="w-64 border p-2"
      />

      {showLimitAlert && (
        <p className="text-red-500">
          Limit reached! Your text exceeds {charLimit} characters
        </p>
      )}

      <div>
        <input
          type="checkbox"
          id="spaces-checkbox"
          checked={areSpacesExcluded}
          onChange={(e) => onSetAreSpacesExcluded(e.target.checked)}
        />
        <label htmlFor="spaces-checkbox">Exclude spaces</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="char-limit-checkbox"
          checked={isThereCharLimit}
          onChange={(e) => onSetIsThereCharLimit(e.target.checked)}
        />
        <label htmlFor="char-limit-checkbox">Set Character Limit</label>
      </div>

      {isThereCharLimit && (
        <div>
          <input
            type="number"
            id="char-limit-num"
            value={charLimitNum}
            onChange={(e) => onSetCharLimitNum(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default TextAreaPanel;

// import { useState } from "react";
// import TextArea from "./TextArea.jsx";

// function TextAreaPanel({ text, setText, excludeSpaces, setExcludeSpaces }) {
//   const [limitEnabled, setLimitEnabled] = useState(true);
//   const [charLimit, setCharlimit] = useState(100);

//   return (
//     <div>
//       <TextArea
//         text={text}
//         setText={setText}
//         charLimit={limitEnabled ? charLimit : Infinity}
//       />

//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={excludeSpaces}
//             onChange={(e) => setExcludeSpaces(e.target.checked)}
//           />
//           Exclude spaces
//         </label>
//       </div>

//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={limitEnabled}
//             onChange={(e) => setLimitEnabled(e.target.checked)}
//           />
//           Character limit
//           {limitEnabled && (
//             <input
//               type="number"
//               value={charLimit}
//               onChange={(e) => setCharlimit(Number(e.target.value))}
//               min={10}
//             />
//           )}
//         </label>
//       </div>
//     </div>
//   );
// }

// export default TextAreaPanel;
