exports.make_matrix = (nrow, ncol) => {
  let A = []
  for (let i = 0; i < nrow; i++) {
    let row = []
    for (let j = 0; j < ncol; j++) {
      row.push(0)
    }
    A.push(row)
  }
  return A
}

exports.ref_matrix = (A, start_row, start_col, nrow, ncol) => {
  if (!Array.isArray(A)) {
    const at = (row, col) => A.at(start_row+row, start_col+col)
    const row_count = () => nrow
    const col_count = () => ncol
    return { at, nrow, ncol }
  }
  const at = (row, col) => {
    return A[start_row + row][start_col + col]
  }
  const row_count = () => nrow
  const col_count = () => ncol
  return { at, row_count, col_count }
}

exports.make_ref = A => {
  if (!Array.isArray(A)) {
    return A
  }
  const at = (row, col) => {
    return A[row][col]
  }
  const row_count = () => A.length
  const col_count = () => {
    if (A.length > 0) {
      return A[0].length
    } else {
      return 0
    }
  }
  return { at, row_count, col_count }
}

exports.make_standalone = ref_matrix => {
  if (Array.isArray(ref_matrix)) {
    return ref_matrix
  }
  const n = ref_matrix.row_count
  const ncol = ref_matrix.col_count
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
  let A = make_ref(objA)
  let B = make_ref(objB)
  let nrow = A.row_count()
  let ncol = A.col_count()
  let C = make_matrix(nrow, ncol)
  for (let i = 0; i < nrow; i++) {
    for (let j = 0; j < ncol; j++) {
      C[i][j] = A.at(i,j) + B.at(i,j)
    }
  }
  return make_ref(C)
}

exports.partition_ref = objA => {
  let A = make_ref(objA)
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
      result.push(ref_matrix(A, i * half_row, j * half_col, half_row, half_col))
    }
  }
  return result
}
