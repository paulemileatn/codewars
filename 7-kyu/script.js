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

// Highest and Lowest
const highAndLow = numbers => {
  const numArray = numbers.split(' ').map(Number);
  return `${Math.max(...numArray)} ${Math.min(...numArray)}`;
};

// No oddities here
const noOdds = values => values.filter(number => number % 2 === 0);

// Password validator
const password = str => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(str);

// Is every value in the array an array?
const arrCheck = value => value.every(el => Array.isArray(el));
