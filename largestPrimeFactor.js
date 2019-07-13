exports.largestPrimeFactor = function(n) {
  let primeNumber = 2;
  while (n > primeNumber) {
    if (n % primeNumber === 0) {
      n = n / primeNumber;
      primeNumber = 2;
    } else {
      primeNumber += 1;
    }
  }
  return primeNumber;
};
