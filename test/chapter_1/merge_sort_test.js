const assert = require('assert')
const merge_sort = require('../../src/chapter_1/merge_sort')

describe('Merge sort test', () => {
  let data = [31, 41, 59, 26, 41, 58]
  it('Basic sort test', done => {
    let arr = [...data]
    merge_sort(arr)
    for (let i = 1; i < arr.length; i++) {
      assert(arr[i] >= arr[i-1])
    }
    done()
  })
  it('One element test', done => {
    let arr = [2]
    merge_sort(arr)
    assert(arr.length === 1)
    assert(arr[0] === 2)
    done()
  })
})
