const pow = (x, n) => {
  let y = 1
  while (n > 0) {
    y *= x
    n--
  }
  return y
}

horner_rule_naive = (A, x) => {
  let y = 0
  for (let i = 0; i < A.length; i++) {
    y += (A[i] * pow(x,i))
  }
  return y
}

module.exports = horner_rule_naive
