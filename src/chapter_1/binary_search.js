const NOT_A_POSITION = -1
const binary_search = (A, elem) => {
  if (elem === null || !Array.isArray(A) || A.length <= 0) {
    return NOT_A_POSITION
  }
  let l = 0
  let r = A.length - 1
  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (elem === A[m]) {
      return m
    } else if (elem < A[m]) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return NOT_A_POSITION
}

module.exports = binary_search
