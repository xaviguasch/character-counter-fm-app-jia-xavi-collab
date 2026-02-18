import ProgressBar from "./ProgressBar";

function LetterGroup({ letter, count, percentage }) {
  return (
    <div className="flex">
      <span>{letter}</span>
      <ProgressBar value={percentage} />
      <span>
        {count} {""}
      </span>
      <span>({percentage})%</span>
    </div>
  );
}

export default LetterGroup;
