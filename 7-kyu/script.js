// Inspiring Strings
const longestWord = stringOfWords => {
  return stringOfWords
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .at(-1);
};

// Evens times last
const evenLast = numbers =>
  numbers.length
    ? numbers.reduce(
        (acc, number, index) => (index % 2 === 0 ? acc + number : acc),
        0
      ) * numbers.at(-1)
    : 0;
