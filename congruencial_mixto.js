const { hasUniqueValuesFunction } = require('./utils');

const _x0 = 73; // semilla
const _a = 65; // const multiplicativa
const _c = 14; // const aditiva
const _M = 92; // modulo

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
const simulatesMixCongruential = (
  x0 = 0,
  a = 0,
  c = 0,
  M = 1,
  stopWhenRepeated = true,
  maxIteraciones = 100
) => {
  const m = 10 ** M.toString().length;

  // initial values
  const res = [
    ['aX + c', 'mod M', '/m'],
    [0, x0, x0 / m]
  ];

  do {
    const prev = [...res].pop()[1];
    const axc = (a * prev) + c;
    const _module = axc % M;
    const rm = _module / m;
    res.push([axc, _module, rm]);
  } while (((stopWhenRepeated && hasUniqueValues(res)) || !stopWhenRepeated) && res.length <= maxIteraciones);

  return res;
};

const resultTable = simulatesMixCongruential(_x0, _a, _c, _M);
console.table(resultTable);
