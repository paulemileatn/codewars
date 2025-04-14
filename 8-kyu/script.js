// How good are you really?
const betterThanAverage = (classPoints, yourPoints) => {
  const allPoints = [...classPoints, yourPoints];
  const classAverage =
    allPoints.reduce((acc, score) => acc + score, 0) / allPoints.length;
  return yourPoints > classAverage;
};

// You only need one - Beginner
const check = (a, x) => a.includes(x);

// simple calculator
const calculator = (a, b, sign) => {
  const validSigns = ['+', '-', '*', '/'];

  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    !validSigns.includes(sign)
  ) {
    return 'unknown value';
  }

  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
};

// Sum The Strings
const sumStr = (a, b) => String(Number(a) + Number(b));

// Template Strings
const templateStrings = (noun, adjective) => `${noun} are ${adjective}`;

// Grasshopper - Personalized Message
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;
