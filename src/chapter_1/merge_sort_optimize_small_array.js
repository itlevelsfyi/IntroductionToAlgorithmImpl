// to speedup small size array sort, use insertion sort
// will use K=5
const K = 5

const insertion_sort = (A,p,r) => {
  // sort elements in A[p..r]
  if (p < r) {
    for (let j = p+1; j <= r; j++) {
      const elem = A[j]
      let i = j-1
      while (i >= p && elem < A[i]) {
        A[i+1] = A[i]
        i--
      }
      A[i+1] = elem
    }
  }
}

const merge = (A,p,q,r) => {
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
  while (k <= r && i < n1 && j < n2) {
    if (L[i] < R[j]) {
      A[k++] = L[i++]
    } else {
      A[k++] = R[j++]
    }
  }
  while (i < n1) {
    A[k++] = L[i++]
  }
  while (j < n2) {
    A[k++] = R[j++]
  }
}

const merge_sort_impl = (A,p,r) => {
  if (p < r) {
    const q = Math.floor((q+r)/2)
    if (q-p+1 <= K) {
      insertion_sort(A,p,q)
    } else {
      merge_sort_impl(A,p,q)
    }
    if (r-q <= K) {
      insertion_sort(A,q+1,r)
    } else {
      merge_sort_impl(A,q+1,r)
    }
    merge(A,p,q,r)
  }
}

const merge_sort = A => {
  return merge_sort_impl(A,0,A.length-1)
}

module.exports = merge_sort
