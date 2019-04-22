const merge = (A, p, q, r) => {
  console.log(`merge p=${p} q=${q} r=${r}`)
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
      console.log(`A[${k}] = L[${i}] ${L[i]}`)
      A[k] = L[i]
      i++
    } else {
      console.log(`A[${k}] = R[${j}] ${R[j]}`)
      A[k] = R[j]
      j++
    }
  }
}

const merge_sort_impl = (A, p, r) => {
  console.log(`merge_sort p=${p} r=${r}`)
  if (p < r) {
    q = Math.floor((p + r) / 2)
    console.log(`q=${q}`)
    merge_sort_impl(A, p, q)
    const z = q + 1
    console.log(`p=${p}, r=${r}, q=${q}, z=q+1, z=${z}`)
    merge_sort_impl(A, z, r)
    merge(A, p, q, r)
  }
}

const merge_sort = A => {
  merge_sort_impl(A, 0, A.length - 1)
}

module.exports = merge_sort
