const assert = require('assert')
const find_maximum_subarray_linear = require('../../src/chapter_4/maximum_subarray_linear')

describe('Linear find maximum subarray test', () => {
  it('linear find maximum sub array test', done => {
    let data = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]
    let [max_left, max_right, max] = find_maximum_subarray_linear(data)
    console.log(`max_left=${max_left}, max_right=${max_right}, max =${max}`)
    assert(max_left == 7)
    assert(max_right == 10)
    assert(max == 43)
    done()
  })
  it('Linear: all neg ones in array, find the biggest one', done => {
    let data = [-13,-3,-25,-20,-3,-16,-23,-18,-20,-7,-12,-5,-22,-15,-4,-7]
    let [max_left, max_right, max] = find_maximum_subarray_linear(data)
    console.log(`max_left=${max_left}, max_right=${max_right}, max =${max}`)
    //assert(max_left === 1)
    //assert(max_right === 1)
    assert(max === -3)
    done()
  })
})
