const assert = require('assert')
const find_maximum_subarray = require('../../src/chapter_4/find_maximum_subarray')

describe('Find maximum subarray test', () => {
  it('find maximum sub array test', done => {
    let data = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]
    let [min_left, min_right, min] = find_maximum_subarray(data)
    assert(min_left == 7)
    assert(min_right ==10)
    assert(min == 43)
    done()
  })
})
