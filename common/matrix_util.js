exports.make_matrix = (nrow, ncol, is_ref = true) => {
  let A = []
  for (let i = 0; i < nrow; i++) {
    let row = []
    for (let j = 0; j < ncol; j++) {
      row.push(0)
    }
    A.push(row)
  }
  return is_ref ? this.make_ref(A) : A
}

exports.ref_matrix = (A, start_row, start_col, nrow, ncol) => {
  if (!Array.isArray(A)) {
    const at = (row, col) => A.at(start_row+row, start_col+col)
    const row_count = () => nrow
    const col_count = () => ncol
    const set = (row, col, val) => A.set(start_row+row, start_col+col, val)
    return { at, set, row_count, col_count }
  }
  const at = (row, col) => {
    return A[start_row + row][start_col + col]
  }
  const set = (row, col, val) => {
    return A[start_row + row][start_col + col] = val
  }
  const row_count = () => nrow
  const col_count = () => ncol
  return { at, set, row_count, col_count }
}

exports.make_ref = A => {
  if (!Array.isArray(A)) {
    return A
  }
  const at = (row, col) => {
    return A[row][col]
  }
  const set = (row, col, val) => {
    A[row][col] = val
  }
  const row_count = () => A.length
  const col_count = () => {
    if (A.length > 0) {
      return A[0].length
    } else {
      return 0
    }
  }
  return { at, set, row_count, col_count }
}

exports.make_standalone = ref_matrix => {
  if (Array.isArray(ref_matrix)) {
    return ref_matrix
  }
  const n = ref_matrix.row_count()
  const ncol = ref_matrix.col_count()
  let A = []
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < ncol; j++) {
      row.push(ref_matrix.at(i,j))
    }
    A.push(row)
  }
  return A
}

exports.add_ref = (objA, objB) => {
  return this.apply_elem_fn(objA, objB, (a,b) => { return a+b })
}

exports.apply_elem_fn = (mxA, mxB, fn) => {
  let A = this.make_ref(mxA)
  let B = this.make_ref(mxB)
  let nrow = A.row_count()
  let ncol = A.col_count()
  let C = this.make_matrix(nrow, ncol)
  for (let i = 0; i < nrow; i++) {
    for (let j = 0; j < ncol; j++) {
      C[i][j] = fn(A.at(i,j), B.at(i,j))
    }
  }
  return this.make_ref(C)
}

exports.paste = (objA, objB, start_row, start_col) => {
  let A = this.make_ref(objA)
  let B = this.make_ref(objB)
  // paste B into A, starting at (start_row, start_col)
  let nrow = B.row_count()
  let ncol = B.col_count()
  for (let i = 0; i < nrow; i++) {
    for (let j = 0; j < ncol; j++) {
      A.set(start_row + i, start_col + j, B.at(i,j))
    }
  }
}

exports.partition_ref = objA => {
  let A = this.make_ref(objA)
  // assume nrow is pow of 2
  const nrow = A.row_count()
  const ncol = A.col_count()
  const half_row = Math.floor(nrow / 2)
  const half_col = Math.floor(ncol / 2)
  // A11: [0,0,half_row,half_col]
  // A12: [0,half_col, half_row, half_col]
  // A21: [hafl_row, 0, half_row, half_col]
  // A22: [half_row, half_col, half_row, half_col]
  let result = []
  for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
      result.push(this.ref_matrix(A, i * half_row, j * half_col, half_row, half_col))
    }
  }
  return result
}

exports.compareMatrix = (mA,mB) => {
  let A = this.make_ref(mA)
  let B = this.make_ref(mB)
  let nrowA = A.row_count()
  let nrowB = B.row_count()
  if (nrowA !== nrowB) {
    console.log(`nrowA=${nrowA}, nrowB=${nrowB}`)
    return false
  }
  let ncolA = A.col_count()
  let ncolB = B.col_count()
  if (ncolA !== ncolB) {
    console.log(`ncolA=${ncolA}, ncolB=${ncolB}`)
    return false
  }
  for (let i = 0; i < nrowA; i++) {
    for (let j = 0; j < ncolA; j++) {
      if (A.at(i,j) !== B.at(i,j)) {
        console.log(`A[${i}][${j}] = ${A.at(i,j)}, B[${i}][${j}] = ${B.at(i,j)}`)
        return false
      }
    }
  }
  return true
}

exports.matrix_ops = ops => {
  let left = null
  let right = null
  let op = null
  if (!Array.isArray(ops)) {
    return ops
  }
  if (ops.length === 1) {
    return ops[0]
  }
  if (ops.length === 2) {
    return ops[0]
  }
  if (ops.length > 2) {
    for (let i = 0; i < ops.length; i++) {
      let item = ops[i]
      if (item === '+' || item === '-') {
        op = item
      } else {
        if (left === null) {
          left = item
        } else if (right === null) {
          right = item
        }
      }
      // check if can reduce result
      const canReduce = (left !== null) && (right !== null) && (op !== null)
      if (canReduce) {
        const add = (a,b) => a+b
        const minus = (a,b) => a-b
        let operand = null
        if (op === '+') {
          operand = add
        } else if (op === '-') {
          operand = minus
        }
        let r = left
        if (operand !== null) {
          r = this.apply_elem_fn(left, right, operand)
        }
        // cleanup
        left = r
        right = null
        op = null
      }
    }
  }
  return left
}
