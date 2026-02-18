export function getLetterPercentages(text) {
  // normalize and extract letters only
  const letters = text.toLowerCase().match(/[a-z]/g) || [];
  const total = letters.length;

  // early return if no letters
  if (total === 0) return {};

  // count occurrences
  const counts = {};
  for (const letter of letters) {
    counts[letter] = (counts[letter] || 0) + 1;
  }

  // build result with [count, percentage]
  const result = {};
  for (const letter in counts) {
    const count = counts[letter];
    const percentage = Number(((count / total) * 100).toFixed(1));
    result[letter] = [count, percentage];
  }

  return result;
}

// console.log(Object.entries(getLetterPercentages(text)));
