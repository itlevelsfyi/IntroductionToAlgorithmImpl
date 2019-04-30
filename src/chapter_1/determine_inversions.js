
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
  let inv = 0
  while (i < n1 && j < n2 && k <= r) {
    if (L[i] <= R[j]) {
      A[k++] = L[i++]
    } else {
      inv += L.length - i
      A[k++] = R[j++]
    }
  }
  while (i < n1) {
    A[k++] = L[i++]
  }
  while (j < n2) {
    A[k++] = R[j++]
  }
  return inv
}

const determine_inversions_impl = (A,p,r) => {
  let inv = 0
  if (p < r) {
    const q = Math.floor((p+r)/2)
    inv += determine_inversions_impl(A,p,q)
    inv += determine_inversions_impl(A,q+1,r)
    inv += merge(A,p,q,r)
  }
  return inv
}

const determine_inversions = A => {
  return determine_inversions_impl(A,0,A.length-1)
}

module.exports = determine_inversions
