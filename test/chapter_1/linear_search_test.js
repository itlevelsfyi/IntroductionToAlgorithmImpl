const assert = require('assert')
const linear_search = require('../../src/chapter_1/linear_search')

describe('Basic Search Test', () => {
  let data = [31, 41, 59, 26, 41, 58]
  it('Exercise-2.1.3-find', done => {
    let arr = [...data]
    let index = linear_search(arr, 59)
    assert(index === 2)
    done()
  })
  it('Exercise-2.1.2-not-find', done => {
    let arr = [...data]
    let index = linear_search(arr, 999)
    assert(index === nil)
    done()
  })
})
