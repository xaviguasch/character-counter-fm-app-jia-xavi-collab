function ProgressBar({ value }) {
  return (
    <div className="w-full h-4 bg-gray-300 rounded overflow-hidden">
      <div className="h-full bg-violet-500 " style={{ width: `${value}%` }} />
    </div>
  );
}

export default ProgressBar;
