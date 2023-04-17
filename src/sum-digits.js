const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let strN = String(n);
  let result = n;

  while (strN.length > 1) {
    let temp = strN.split("").reduce((sum, num) => sum + +num, 0);
    result = temp;
    strN = String(temp);
  }

  return result;
}

module.exports = {
  getSumOfDigits,
};
