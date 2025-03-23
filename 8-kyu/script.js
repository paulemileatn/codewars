// How good are you really?
const betterThanAverage = (classPoints, yourPoints) => {
  const allPoints = [...classPoints, yourPoints];
  const classAverage =
    allPoints.reduce((acc, score) => acc + score, 0) / allPoints.length;
  return yourPoints > classAverage;
};

// You only need one - Beginner
const check = (a, x) => a.includes(x);
