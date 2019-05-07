const util = require('../../common/matrix_util')

const strassen = (mxA, mxB) => {
  let A = util.make_ref(mxA)
  let B = util.make_ref(mxB)
  let n = A.row_count()
  let C = util.make_matrix(n,n)
  if (n === 1) {
    C.set(0,0, A.at(0,0) * B.at(0,0)) 
  } else {
    let halfn = Math.floor(n/2)
    let [A11,A12,A21,A22] = util.partition_ref(A)
    let [B11,B12,B21,B22] = util.partition_ref(B)
    // build S1..S10
    const add = (a,b) => { return a+b }
    const minus = (a,b) => { return a-b }
    let S1 = util.apply_elem_fn(B12,B22,minus)
    let S2 = util.apply_elem_fn(A11,A12,add)
    let S3 = util.apply_elem_fn(A21,A22,add)
    let S4 = util.apply_elem_fn(B21,B11,minus)
    let S5 = util.apply_elem_fn(A11,A22,add)
    let S6 = util.apply_elem_fn(B11,B22,add)
    let S7 = util.apply_elem_fn(A12,A22,minus)
    let S8 = util.apply_elem_fn(B21,B22,add)
    let S9 = util.apply_elem_fn(A11,A21,minus)
    let S10 = util.apply_elem_fn(B11,B12,add)
    // build P1..P7
    let P1 = strassen(A11,S1)
    let P2 = strassen(S2,B22)
    let P3 = strassen(S3,B11)
    let P4 = strassen(A22,S4)
    let P5 = strassen(S5,S6)
    let P6 = strassen(S7,S8)
    let P7 = strassen(S9,S10)
    // build subblocks of C
    let C11 = util.matrix_ops([P5, '+', P4, '-', P2, '+', P6])
    let C12 = util.matrix_ops([P1, '+', P2])
    let C21 = util.matrix_ops([P3, '+', P4])
    let C22 = util.matrix_ops([P5, '+', P1, '-', P3, '-', P7])
    // paste C
    util.paste(C, C11, 0, 0)
    util.paste(C, C12, 0, halfn)
    util.paste(C, C21, halfn, 0)
    util.paste(C, C22, halfn, halfn)
  }
  return C
}

module.exports = strassen
