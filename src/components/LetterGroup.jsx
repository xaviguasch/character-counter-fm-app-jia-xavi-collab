import ProgressBar from "./ProgressBar";

function LetterGroup({ letter, count, percentage }) {
  return (
    <li className="flex items-center gap-3 text-preset-4">
      <span className="uppercase w-4 inline-block">{letter}</span>
      <ProgressBar value={percentage} />
      <div className="w-24.5 whitespace-nowrap flex justify-end gap-1 ">
        <span>{count}</span>
        <span>({percentage})%</span>
      </div>
    </li>
  );
}

export default LetterGroup;

// import ProgressBar from "./ProgressBar";

// function LetterGroup({ letter, count, percentage }) {
//   return (
//     <div className="flex flex-row gap-3.5 items-center text-preset-4">
//       <span>{letter.toUpperCase()}</span>
//       <ProgressBar value={percentage} />
//       <span className="whitespace-nowrap w-16 text-right">
//         {count} ({percentage}%)
//       </span>
//     </div>
//   );
// }

// export default LetterGroup;
