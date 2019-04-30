const assert = require('assert')
const determine_inversions = require('../../src/chapter_1/determine_inversions')

describe('Determine Inversions Tests', () => {
  
  it('Basic determine inversion test', done => {
    let A = [2,3,8,6,1]
    assert(determine_inversions(A), 5)
    done()
  })
  it('No inversions for already sorted array', done => {
    let A = [1,2,3,5,8,10]
    console.log(determine_inversions(A))
    assert(determine_inversions(A), 0)
    done()
  })
})
