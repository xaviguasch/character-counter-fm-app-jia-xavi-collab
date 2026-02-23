const bgMap = {
  purple: "bg-purple",
  yellow: "bg-yellow",
  orange: "bg-orange",
  text2: "bg-text2",
};

const patternMap = {
  charCount: "bg-[url('/pattern-character-count.svg')]",
  wordCount: "bg-[url('/pattern-word-count.svg')]",
  sentenceCount: "bg-[url('/pattern-sentence-count.svg')]",
};

function Counter({ number, name, bgColor, pattern }) {
  console.log(patternMap[pattern]);

  return (
    <div
      className={`${bgMap[bgColor]} ${bgColor}  bg-no-repeat 
   bg-position-[right_-50px_top_-10px] md:bg-position-[right_-25px_top_-0px] bg-auto ${patternMap[pattern]}  w-full  flex flex-col px-5 md:px-3 py-7 md:py-6 text-left rounded-xl gap-2 md:gap-1.5
  `}
    >
      <span className="text-preset-1">{number}</span>
      <span className="text-preset-3">{name}</span>
    </div>
  );
}

export default Counter;
