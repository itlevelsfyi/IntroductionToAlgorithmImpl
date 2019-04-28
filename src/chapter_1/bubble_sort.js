const swap = (A,i,j) => {
  const elem = A[i]
  A[i] = A[j]
  A[j] = elem
}

const bubble_sort = A => {
  for (let i = 0; i < A.length-1; i++) {
    for (let j = A.length - 1; j > i; j--) {
      // invariant: for each inner loop, A[i] will contain smallest item in A[i..A.length-1].
      if (A[j] < A[j-1]) {
        swap(A,j,j-1)
      }
    }
  }
}

module.exports = bubble_sort
