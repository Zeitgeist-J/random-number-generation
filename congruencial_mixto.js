const _x0 = 73; // semilla
const _a = 65; // const multiplicativa
const _c = 14; // const aditiva
const _M = 92; // modulo

const hasUniqueValues = (arr) => (
  arr.reduce((acc, el, i, _this) => {
    const index = _this.findIndex((val) => val[1] === el[1]);
    return acc && (index === i);
  }, true)
);

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
