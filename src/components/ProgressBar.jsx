function ProgressBar({ value }) {
  return (
    <div className="w-[80%] sm:w-[90%] md:w-full h-3 bg-background2 rounded-xl overflow-hidden">
      <div
        className="h-full bg-purple rounded-xl"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default ProgressBar;
