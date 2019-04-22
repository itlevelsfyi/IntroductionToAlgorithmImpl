const selection_sort = A => {
  const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  // invariant: after i-th iteration, every element satisifies A[1..i] < A[i+1..A.length-1]
  for (let i = 0; i < A.length - 1; i++) {
    let min_idx = null
    for (let j = i; j < A.length; j++) {
      if (!min_idx) {
        min_idx = j
      }
      if (min_idx && A[min_idx] > A[j]) {
        min_idx = j
      }
    }
    if (min_idx) {
      swap(A, i, min_idx)
    }
  }
}

module.exports = selection_sort
