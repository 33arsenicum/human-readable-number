module.exports = function toReadable(number) {
  const ones = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  if (number === 0) {
    return ones[0];
  }

  function upToAHundred(num) {
    if (num < 20) {
      return ones[num];
    } else {
      const doubleDigit = Math.floor(num / 10);
      const singleDigit = num % 10;
      return tens[doubleDigit] + (singleDigit !== 0 ? ' ' + ones[singleDigit] : '');
    }
  }

  let result = '';

  if (number < 100) {
    result = upToAHundred(number);
  } else {
    const threeDigit = Math.floor(number / 100);
    const remainingNum = number % 100;
    result = ones[threeDigit] + ' hundred' + (remainingNum !== 0 ? ' ' + upToAHundred(remainingNum) : '');
  }

  return result;
}
