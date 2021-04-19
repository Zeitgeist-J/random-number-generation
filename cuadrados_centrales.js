const {
  addZeroIfRequired,
  getKMiddleNumber,
  hasUniqueValuesFunction,
  params
} = require('./utils');

const {
  seed,
  maxIterations,
  stopWhenRepeated,
  k,
  s
} = params;

if ((!seed && !s) || !k) {
  console.warn('One parameter was dismissed');
  process.exit(1);
}

if (
  (!Number(seed) && !Number(s))
  || (maxIterations && !Number(maxIterations) && Number(maxIterations) < 0)
  || (!Number(k) && (Number(k) < 0))
) {
  console.warn('One parameter was wrongly provided');
  process.exit(2);
}

const hasUniqueValues = hasUniqueValuesFunction((el) => (val) => val[1] === el[1]);

const getSquare = (number) => number ** 2;

/*
 * Simulates using the middle square method
 * @param {number} k The central numbers to be taken
 * @param {number} seed The initial value for the simulation
 * @param {boolean} stopWhenRepeated Stops the simulation if a repeated value appears, default true
 * @param {number} maxIterations Max number of iteractions, default 100
 *
 * @return {Array} res The historical values
 *
*/
const simulateCentralSquares = (_k, _seed, stopIfRepeated = true, _maxIterations = 100) => {
  const m = 10 ** _k;

  // creates custom functions for received K
  const getMiddleNumber = getKMiddleNumber(_k);
  const addZero = addZeroIfRequired(_k);

  const seedSquare = addZero(getSquare(_seed));
  const seedKMiddle = getMiddleNumber(seedSquare);

  // sets the first two rows, header and initial value
  const res = [['^2', 'k medios', '/M'], [seedSquare, seedKMiddle, seedKMiddle / m]];

  do {
    const prev = [...res].pop()[1];
    const square = addZero(getSquare(prev));
    const squareMiddle = getMiddleNumber(square);
    const squarePercentage = squareMiddle / m;
    res.push([square, squareMiddle, squarePercentage]);
  } while (
    ((stopIfRepeated && hasUniqueValues(res)) || !stopIfRepeated)
    && (res.length - 1) <= _maxIterations
  );

  return res;
};

const resultTable = simulateCentralSquares(k, seed || s, stopWhenRepeated, maxIterations);
console.table(resultTable);
