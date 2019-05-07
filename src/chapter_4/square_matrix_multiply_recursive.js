const matrix_util = require('../../common/matrix_util')

const square_matrix_multiply_recursive_impl = (objA,objB) => {
  let A = matrix_util.make_ref(objA)
  let B = matrix_util.make_ref(objB)
  const n = A.row_count()
  let C = matrix_util.make_matrix(n,n)
  let halfn = Math.floor(n/2)
  if (n === 1) {
    C.set(0, 0, A.at(0,0) * B.at(0,0))
  } else {
    let [A11,A12,A21,A22] = matrix_util.partition_ref(A)
    let [B11,B12,B21,B22] = matrix_util.partition_ref(B)
    let C11 = matrix_util.add_ref(square_matrix_multiply_recursive_impl(A11,B11), square_matrix_multiply_recursive_impl(A12,B21))
    let C12 = matrix_util.add_ref(square_matrix_multiply_recursive_impl(A11,B12), square_matrix_multiply_recursive_impl(A12,B22))
    let C21 = matrix_util.add_ref(square_matrix_multiply_recursive_impl(A21,B11), square_matrix_multiply_recursive_impl(A22,B21))
    let C22 = matrix_util.add_ref(square_matrix_multiply_recursive_impl(A21,B12), square_matrix_multiply_recursive_impl(A22,B22))
    // paste sub-matrices into C
    C = matrix_util.make_ref(C)
    matrix_util.paste(C, C11, 0, 0)
    matrix_util.paste(C, C12, 0, halfn)
    matrix_util.paste(C, C21, halfn, 0)
    matrix_util.paste(C, C22, halfn, halfn)
  }
  return matrix_util.make_ref(C)
}

const square_matrix_multiply_recursive = (A,B) => {
  const objC = square_matrix_multiply_recursive_impl(A,B)
  return matrix_util.make_standalone(objC)
}

module.exports = square_matrix_multiply_recursive
