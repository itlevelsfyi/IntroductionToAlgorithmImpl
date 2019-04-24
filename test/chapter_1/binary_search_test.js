const assert = require('assert')
const binary_search = require('../../src/chapter_1/binary_search')
const sort_data = require('../sort_data/sort_data')
const num_ascending = require('../sort_data/num_ascending')

describe('Binary search test, () => {
  it('Find existing item and return correct index', done => {
    let data = [1,2,3,4,5,6]
    let idx = binary_search(data, 3)
    assert(idx === 2)
    done()
  })
  it('Find non-existing item and return -1', done => {
    let data = [1,2,3,4,5,6]
    let idx = binary_search(data, 0)
    assert(idx === -1)
    done()
  })
  it('Find item in empty array', done => {
    let data = []
    let idx = binary_search(data, 0)
    assert(idx === -1)
    done()
  })
})
