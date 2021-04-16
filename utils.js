module.exports.getKMiddleNumber = (k) => (number) => {
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

module.exports.addZeroIfRequired = (k) => (number) => {
  const isRequired = (number.toString(10).length % 2) !== (k % 2);
  return number * (isRequired ? 10 : 1);
};

module.exports.hasUniqueValuesFunction = (callback) => (arr) => (
  arr.reduce((acc, el, i, _this) => {
    const index = _this.findIndex(callback(el));
    return acc && (index === i);
  }, true)
);