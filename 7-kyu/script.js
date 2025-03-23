// Inspiring Strings
const longestWord = stringOfWords => {
  return stringOfWords
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .at(-1);
};
