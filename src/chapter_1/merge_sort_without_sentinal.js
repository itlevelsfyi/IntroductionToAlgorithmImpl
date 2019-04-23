const merge = (A, p, q, r) => {
  const n1 = q-p+1
  const n2 = r-q
  let L = []
  for (let i = 0; i < n1; i++) {
    L.push(A[p+i])
  }
  let R = []
  for (let j = 0; j < n2; j++) {
    R.push(A[q+1+j])
  }
  let i = 0
  let j = 0
  let k = p
  while (i < n1 && j < n2) {
    if (A[i] <= A[j]) {
      A[k++] = A[i++]
    } else {
      A[k++] = A[j++]
    }
  }
  while (i < n1) {
    A[k++] = A[i++]
  }
  while (j < n2) {
    A[k++] = A[j++]
  }
}

const merge_impl = (A, p, r) => {
  if (p < r) {
    const q = Math.floor((p + r) / 2)
    merge_impl(A, p, q)
    merge_impl(A, q+1, r)
    merge(A, p, q, r)
  }
}

const merge_sort = A => {
  merge_impl(A, 0, A.length - 1)
}

module.exports = merge_sort
