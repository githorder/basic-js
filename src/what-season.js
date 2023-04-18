const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    const seasons = [
      "winter",
      "winter",
      "spring",
      "spring",
      "spring",
      "summer",
      "summer",
      "summer",
      "autumn",
      "autumn",
      "autumn",
      "winter",
    ];

    if (date === undefined) {
      return "Unable to determine the time of year!";
    }

    if (
      isNaN(date.getMonth()) ||
      !(date instanceof Date) ||
      date.hasOwnProperty("getMonth")
    ) {
      throw new Error("Invalid date!");
    }

    return seasons[date.getMonth()];
  } catch (_) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
