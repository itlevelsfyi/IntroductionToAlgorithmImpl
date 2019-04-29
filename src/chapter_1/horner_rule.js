const horner_rule = (A, x) => {
  // A: cofficient of a0,a1,...,an
  let y = 0
  for (let i = A.length - 1; i >= 0; i--) {
    y = A[i] + x * y
  }
  return y
}

module.exports = horner_rule
