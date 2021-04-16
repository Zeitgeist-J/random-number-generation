const { addZeroIfRequired, getKMiddleNumber, hasUniqueValuesFunction } = require('./utils');

const _k = 3;
const _seed = 304;

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
const simulateCentralSquares = (k = 0, seed = 0, stopWhenRepeated = true, maxIterations = 100) => {
  const m = 10 ** k;

  // creates custom functions for received K
  const getMiddleNumber = getKMiddleNumber(k);
  const addZero = addZeroIfRequired(k);

  const seedSquare = addZero(getSquare(seed));
  const seedKMiddle = getMiddleNumber(seedSquare);

  // sets the first two rows, header and initial value
  const res = [['^2', 'k medios', '/M'], [seedSquare, seedKMiddle, seedKMiddle / m]];

  do {
    const prev = [...res].pop()[1];
    const square = addZero(getSquare(prev));
    const squareMiddle = getMiddleNumber(square);
    const squarePercentage = squareMiddle / m;
    res.push([square, squareMiddle, squarePercentage]);
  } while (((stopWhenRepeated && hasUniqueValues(res)) || !stopWhenRepeated) && res.length <= maxIterations);

  return res;
};

const resultTable = simulateCentralSquares(_k, _seed);
console.table(resultTable);
