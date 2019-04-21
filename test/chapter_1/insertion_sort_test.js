const assert = require('assert')
const insertion_sort = require('../../src/chapter_1/insertion_sort')
const insertion_sort_descending = require('../../src/chapter_1/insertion_sort_descending')

describe('Basic Sort Test', () => {
  let data = [31, 41, 59, 26, 41, 58]
  it('Exercise-2.1.1', done => {
    let arr = [...data]
    insertion_sort(arr)
    for (let i = 1; i < arr.length; i++) {
      assert(arr[i] >= arr[i-1])
    }
    done()
  })
  it('Exercise-2.1.2', done => {
    let arr = [...data]
    insertion_sort_descending(arr)
    for (let i = 1; i < arr.length; i++) {
      assert(arr[i] <= arr[i-1])
    }
    done()
  })
})
