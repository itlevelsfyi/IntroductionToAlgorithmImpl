const add_binary_integer = (A, B) => {
  if (!Array.isArray(A) || A.length <= 0) {
    B.unshift(0)
    return B
  } else if (!Array.isArray(B) || B.length <= 0) {
    A.unshift(0)
    return A
  } else {
    let carry = 0
    let result = []
    const reverse_index = (Arr, idx) => Arr.length - idx - 1
    let i = 0
    while (i < A.length || i < B.length) {
      const ai = (reverse_index(A,i) >= 0) ? A[reverse_index(A,i)] : 0
      const bi = (reverse_index(B,i) >= 0) ? B[reverse_index(B,i)] : 0
      const ci = ai + bi + carry
      if (ci === 3) {
        carry = 1
        result.unshift(1)
      } else if (ci === 2) {
        carry = 1
        result.unshift(0)
      } else if (ci === 1) {
        result.unshift(1)
      } else {
        result.unshift(0)
      }
      i++
    }
    result.unshift(carry)
    return result
  }
}

module.exports = add_binary_integer
