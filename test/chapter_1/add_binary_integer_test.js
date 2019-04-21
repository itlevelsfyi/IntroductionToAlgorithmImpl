const assert = require('assert')
const add_binary_integer = require('../../src/chapter_1/add_binary_integer')

describe('Add Binary Integer Test', () => {
  const compare_array = (A,B) => {
    if (A.length !== B.length) {
      return false
    }
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        return false
      }
    }
    return true
  }
  it('Add both zeros', done => {
    let A = [0]
    let B = [0]
    assert(compare_array(add_binary_integer(A,B), [0,0]))
    done()
  })
  it('One of array is empty', done => {
    let A = [1,0,1]
    let B = []
    assert(compare_array(add_binary_integer(A,B), [0,1,0,1])
    done()
  })
  it('Normal addition', done => {
    let A = [1,0,1]
    let B = [1,0]
    assert(compare_array(add_binary_integer(A,B), [0,1,1,1])
    done()
  })
})
