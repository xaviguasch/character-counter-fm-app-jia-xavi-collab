function ProgressBar({ value }) {
  return (
    <div className="grow h-3 bg-background2  overflow-hidden rounded-full">
      <div
        className="h-full bg-purple-400 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default ProgressBar;
