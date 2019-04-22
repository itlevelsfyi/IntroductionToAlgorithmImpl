const merge = (A, p, q, r) => {
  const n1 = q - p + 1
  const n2 = r - q
  let L = []
  let R = []
  for (let i = 0; i < n1; i++) {
    L.push(A[p+i])
  }
  for (let j = 0; j < n2; j++) {
    R.push(A[q+1+j])
  }
  // add sentinal
  L.push(Infinity)
  R.push(Infinity)
  
  let i = 0
  let j = 0
  for (let k = p; k <= r; k++) {
    if (L[i] <= R[j]) {
      A[k] = L[i]
      i++
    } else {
      A[k] = R[j]
      j++
    }
  }
}

const merge_sort_impl = (A, p, r) => {
  if (p < r) {
    q = Math.floor((p + r) / 2)
    merge_sort_impl(A, p, q)
    merge_sort_impl(A, q + 1, r)
    merge(A, p, q, r)
  }
}

const merge_sort = A => {
  merge_sort_impl(A, 0, A.length - 1)
}

module.exports = merge_sort
