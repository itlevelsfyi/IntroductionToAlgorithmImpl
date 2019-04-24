const insertion_sort_recursive = (A, len) => {
  // recursive version
  if (len > 1) {
    insertion_sort_recursive(A, len-1)
    // now [0, len-1] is sorted
    let val = A[len]
    let i = len-1
    while (i >= 0 && val < A[i]) {
      A[i+1] = A[i]
      i--
    }
    A[i+1] = val
  }
}
const insertion_sort = A => {
  insertion_sort_recursive(A, A.length - 1)
}

module.exports = insertion_sort
