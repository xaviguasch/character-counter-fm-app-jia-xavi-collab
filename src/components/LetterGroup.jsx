import ProgressBar from "./ProgressBar";

function LetterGroup({ letter, count, percentage }) {
  return (
    <div className="flex flex-row gap-3.5 items-center text-preset-4">
      <span>{letter.toUpperCase()}</span>
      <ProgressBar value={percentage} />
      <span className="whitespace-nowrap w-16 text-right">
        {count} ({percentage}%)
      </span>
    </div>
  );
}

export default LetterGroup;
