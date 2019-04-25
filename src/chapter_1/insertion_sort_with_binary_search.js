insertion_sort = A => {
  const binary_search_insert_point = (A, left, right, elem) => {
    let l = left
    let r = right
    let pos = Math.floor((l + r) / 2)
    while (l <= r) {
      if (elem >= A[r]) {
        return r + 1
      } else if (elem <= A[l]) {
        return l
      }
      pos = Math.floor((l+r) / 2)
      if (elem === A[pos]) {
        return pos
      } else if (elem < A[pos]) {
        r = pos - 1
      } else {
        l = pos + 1
      }
    }
    return pos
  }
  for (let i = 1; i < A.length; i++) {
    // [0..i-1] are sorted
    const elem = A[i]
    const idx = binary_search_insert_point(A, 0, i-1, elem)
    for (p = i; p > idx;  p--) {
      A[p] = A[p-1]
    }
    A[idx] = elem
  }
}
module.exports = insertion_sort
