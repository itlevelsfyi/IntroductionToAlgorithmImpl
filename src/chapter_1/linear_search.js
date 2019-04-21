const linear_search = (A, elem) => {
  if (elem && A.length > 0) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === elem) {
        return i
      }
    }
  }
  return null
}

module.exports = linear_search
