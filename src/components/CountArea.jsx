import Counter from "./Counter";

function CountArea({ text, areSpacesExcluded, wordCount }) {
  const charCount = areSpacesExcluded
    ? text.replace(/\s/g, "").length
    : text.length;

  const sentenceCount =
    text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length;

  return (
    <div className="text-count-card w-full flex flex-col gap-4 md:flex-row">
      <Counter
        name="Total Characters"
        number={charCount}
        bgColor="purple"
        pattern="charCount"
      />
      <Counter
        name="Word Count"
        number={wordCount}
        bgColor="yellow"
        pattern="wordCount"
      />
      <Counter
        name="Sentence Count"
        number={sentenceCount}
        bgColor="orange"
        pattern="sentenceCount"
      />
    </div>
  );
}

export default CountArea;
