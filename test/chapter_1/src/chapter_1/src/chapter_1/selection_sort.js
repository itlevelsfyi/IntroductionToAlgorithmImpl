const assert = require('assert')
const selection_sort = require('../../src/chapter_1/selection_sort')

describe('Selection Sort Test', () => {
  let data = [31, 41, 59, 26, 41, 58]
  it('Basic Test', done => {
    let arr = [...data]
    selection_sort(arr)
    for (let i = 1; i < arr.length; i++) {
      assert(arr[i] >= arr[i-1])
    }
    done()
  })
  it('Test empty case', done => {
    let arr = []
    selection_sort(arr)
    for (let i = 1; i < arr.length; i++) {
      assert(false)
    }
    assert(true)
    done()
  })
})
