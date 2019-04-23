const num_ascending = require('../../test/sort_data/num_ascending')

const selection_sort = (A, sort_method = num_ascending) => {
  const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  // invariant: after i-th iteration, every element satisifies A[1..i] < A[i+1..A.length-1]
  for (let i = 0; i < A.length - 1; i++) {
    let min_idx = null
    for (let j = i; j < A.length; j++) {
      if (min_idx === null) {
        min_idx = j
      } else {
        let [min, aj] = [+A[min_idx], +A[j]]
        if (aj < min) {
          min_idx = j
        }
      }
    }
    if (min_idx) {
      swap(A, i, min_idx)
    }
  }
}

module.exports = selection_sort
