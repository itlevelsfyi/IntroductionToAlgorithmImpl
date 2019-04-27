const assert = require('assert')
const is_sum_in_set = require('../../src/chapter_1/is_sum_in_set')

describe('Is sum in set test', () => {
  it('Find existing item and return correct index', done => {
    let data = [6,5,0,3,7,1]
    let idx = is_sum_in_set(data, 8)
    assert(idx > -1)
    done()
  })
  it('Find non-existing item and return -1', done => {
    let data = [1,2,13,4,9,6]
    let idx = is_sum_in_set(data, 200)
    assert(idx === -1)
    done()
  })
})
