const square_matrix_multiply = (A,B) => {
  const n = A.length
  // initialize C
  let C = []
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      row.push(0)
    }
    C.push(row)
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let c = 0
      for (let k = 0; k < n; k++) {
        c = c + A[i][k] * B[k][j]
      }
      C[i][j] = c
    }
  }
  return C
}

module.exports = square_matrix_multiply
