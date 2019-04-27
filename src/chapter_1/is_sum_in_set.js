// Problem: Describe algorithm that, given a set S of n integers and another integer x, 
// determines whether or not there exist two elements in S whose sum is exactly x

// assume S is stored in array -> S[]
// first sort S in nlgn with merge sort
// then will loop over each element e and find if there's element x-e
const merge = (A, p, q, r) => {
  let n1 = q-p+1
  let n2 = r-q
  let l = []
  for (let i = 0; i < n1; i++) {
    l.push(A[p+i])
  }
  let r = []
  for (let j = 0; j < n2; j++) {
    r.push(A[q+1+j])
  }
  let i = 0
  let j = 0
  let k = p
  while (i < n1 && j < n2 && k <= q) {
    if (l[i] < r[j]) {
      A[k++] = l[i++]
    } else {
      A[k++] = r[j++]
    }
  }
  while (i<n1) {
    A[k++] = l[i++]
  }
  while (j<n2) {
    A[k++] = r[j++]
  }
}

const merge_sort_impl = (A, p, r) => {
  if (p < r) {
    const q = Math.floor((p+r)/2)
    merge_sort_impl(A,p,q)
    merge_sort_impl(A,q+1,r)
    merge(A,p,q,r)
  }
}

const merge_sort = A => {
  merge_sort_impl(A,0,A.length-1)
}

const binary_search = (A, elem) => {
  let l = 0
  let r = A.length - 1
  while (l <= r) {
    let m = Math.floor((l+r)/2)
    if (elem === A[m]) {
      return m
    } else if (elem < A[m]) {
      r = m-1
    } else {
      l = m+1
    }
  }
  return -1
}

const is_sum_in_set = (S, x) => {
  merge_sort(S)
  for (let i = 0; i < S.length; i++) {
    const idx = binary_search(S, x-S[i])
    if (idx > -1) {
      return idx
    }
  }
  return -1
}
