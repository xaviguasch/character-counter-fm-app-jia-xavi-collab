import Counter from "./Counter";

function CountArea({ charCount, wordCount, sentenceCount }) {
  return (
    <div className="w-full flex flex-col gap-4 md:flex-row">
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
