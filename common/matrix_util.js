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
  const at = (row, col) => {
    return A[start_row + row][start_col + col]
  }
  const row_count = () => nrow
  const col_count = () => ncol
  return { at, row_count, col_count }
}

exports.make_ref = A => {
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
