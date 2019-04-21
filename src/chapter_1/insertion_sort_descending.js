const insertion_sort_descending = A => {
  for (let j = 1; j < A.length; j++) {
    const key = A[j]
    let i = j - 1
    while (i >= 0 && key > A[i]) {
      A[i+1] = A[i]
      i--
    }
    A[i+1] = key
  }
}
module.exports = insertion_sort_descending
