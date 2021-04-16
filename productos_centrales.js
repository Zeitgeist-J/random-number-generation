const _k = 3;
const _seed0 = 304;
const _seed1 = 512;

const getKMiddleNumber = (k) => (number) => {
  const numberString = number.toString(10);

  const startPoint = Math.floor(numberString.length / 2);
  const jumps = Math.floor(k / 2);
  const isEvent = numberString.length % 2 === 0;
  return Number(
    numberString.substring(
      startPoint - (jumps - (isEvent ? 1 : 0)),
      startPoint + jumps + 1
    )
  );
};

const addZeroIfRequired = (k) => (number) => {
  const isRequired = (number.toString(10).length % 2) !== (k % 2);
  return number * (isRequired ? 10 : 1);
};

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
const simulateWithCentralProducts = (k = 0, seed0 = 0, seed1 = 0, maxIterations = 15) => {
  const m = 10 ** k;

  // creates custom functions for received K
  const getMiddleNumber = getKMiddleNumber(k);
  const addZero = addZeroIfRequired(k);

  // sets the first two rows, header and initial value
  const res = [
    ['Xn-1 * Xn-2', 'k medios', '/M'],
    [seed0, seed0, seed0 / m],
    [seed1, seed1, seed1 / m]
  ];

  // eslint-disable-next-line no-constant-condition
  do {
    const resCopy = [...res];
    const prev0 = resCopy.pop()[1];
    const prev1 = resCopy.pop()[1];
    const product = addZero(getProducts(prev0, prev1));
    const productMiddle = getMiddleNumber(product);
    const productPercentage = productMiddle / m;
    res.push([product, productMiddle, productPercentage]);
  } while (res.length === maxIterations);

  return res;
};

const resultTable = simulateWithCentralProducts(_k, _seed0, _seed1);
console.table(resultTable);
