const {
  addZeroIfRequired,
  getKMiddleNumber,
  hasUniqueValuesFunction,
  params
} = require('./utils');

const {
  seed1,
  seed2,
  maxIterations,
  stopWhenRepeated,
  k
} = params;

if (!seed1 || !seed2 || !k) {
  console.warn('One parameter was dismissed');
  process.exit(1);
}

if (
  (!Number(seed1) && (Number(seed1) === 0))
  || (!Number(seed2) && (Number(seed2) === 0))
  || (maxIterations && !Number(maxIterations) && Number(maxIterations) < 0)
  || (!Number(k) && (Number(k) < 0))
) {
  console.warn('One parameter was wrongly provided');
  process.exit(2);
}

const hasUniqueProducts = hasUniqueValuesFunction((el) => (val) => val[0] === el[0]);

const getProducts = (...numbers) => numbers.reduce((acc, el) => acc * el);

/*
 * Simulates using the middle product method
 * @param {number} k The central numbers to be taken
 * @param {number} seed0 The first initial value for the simulation
 * @param {number} seed1 The second initial value for the simulation
 * @param {number} maxIterations Max number of iteractions, default 100
 *
 * @return {Array} res The historical values
 *
*/
const simulateWithCentralProducts = (_k, _seed0, _seed1, stopIfRepeated = true, maxIt = 50) => {
  const m = 10 ** _k;

  // creates custom functions for received K
  const getMiddleNumber = getKMiddleNumber(_k);
  const addZero = addZeroIfRequired(_k);

  // sets the first two rows, header and initial value
  const res = [
    ['Xn-1 * Xn-2', 'k medios', '/M'],
    [_seed0, _seed0, _seed0 / m],
    [_seed1, _seed1, _seed1 / m]
  ];

  do {
    const resCopy = [...res];
    const prev0 = resCopy.pop()[1];
    const prev1 = resCopy.pop()[1];
    const product = addZero(getProducts(prev0, prev1));
    const productMiddle = getMiddleNumber(product);
    const productPercentage = productMiddle / m;
    res.push([product, productMiddle, productPercentage]);
  } while (
    ((stopIfRepeated && hasUniqueProducts(res)) || !stopIfRepeated)
    && (res.length - 1) <= maxIt
  );

  return res;
};

const resultTable = simulateWithCentralProducts(
  k,
  seed1,
  seed2,
  stopWhenRepeated,
  maxIterations
);

console.table(resultTable);
