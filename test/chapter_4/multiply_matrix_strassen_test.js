const assert = require('assert')
const strassen = require('../../src/chapter_4/strassen_mutiplication')
const matrix_util = require('../../common/matrix_util')

describe('strassen Matrix multiply test', () => {
  it('strassen square matrix multiply test', done => {
    let A = [
      [1,3],
      [7,5]
    ]
    let B = [
      [6,8],
      [4,2]
    ]
    let C = strassen(A,B)
    
    let product = [
      [18, 14],
      [62, 66]
    ]
    assert(matrix_util.compareMatrix(C, product) === true)
    done()
  })
})
