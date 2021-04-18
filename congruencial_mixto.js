const { hasUniqueValuesFunction, params } = require('./utils');

const {
  seed,
  a,
  c,
  m,
  stopWhenRepeated,
  maxIterations
} = params;

if (!seed || !a || !c || !m) {
  console.warn('One parameter was dismissed');
  process.exit(1);
}

if (
  (!Number(seed))
  || (!Number(a))
  || (!Number(c))
  || (!Number(m))
  || (maxIterations && !Number(maxIterations) && Number(maxIterations) < 0)
) {
  console.warn('One parameter was wrongly provided');
  process.exit(2);
}

const hasUniqueValues = hasUniqueValuesFunction((el) => (val) => val[1] === el[1]);

/*
 * Simulates using the mix congruential method
 * @param {number} x0 The seed value
 * @param {number} a The multiplicative constant
 * @param {number} c The additive constant
 * @param {number} M The module to reduce the number
 * @param {boolean} stopWhenRepeated Stops the simulation if a repeated value appears, default true
 * @param {number} maxIterations Max number of iteractions, default 100
 *
 * @return {Array} res The historical values
 *
*/
const simulatesMixCongruential = (x0, _a, _c, M, stopIfRepeated = true, maxIt = 100) => {
  const _m = 10 ** M.toString().length;

  // initial values
  const res = [
    ['aX + c', 'mod M', '/m'],
    [0, x0, x0 / _m]
  ];

  do {
    const prev = [...res].pop()[1];
    const axc = (_a * prev) + _c;
    const _module = axc % M;
    const rm = _module / _m;
    res.push([axc, _module, rm]);
  } while (
    ((stopIfRepeated && hasUniqueValues(res)) || !stopIfRepeated)
    && (res.length - 1) <= maxIt
  );

  return res;
};

const resultTable = simulatesMixCongruential(seed, a, c, m, stopWhenRepeated, maxIterations);
console.table(resultTable);
