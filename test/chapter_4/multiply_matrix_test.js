const assert = require('assert')
const square_matrix_multiply = require('../../src/chapter_4/square_matrix_multiply')
const matrix_util = require('../../common/matrix_util')

describe('Matrix multiply test', () => {
  it('Square matrix multiply test', done => {
    let A = [
      [1,3],
      [7,5]
    ]
    let B = [
      [6,8],
      [4,2]
    ]
    let C = square_matrix_multiply(A,B)
    
    let product = [
      [18, 14],
      [62, 66]
    ]
    assert(matrix_util.compareMatrix(C, product) === true)
    done()
  })
})
