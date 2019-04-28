const assert = require('assert')
const merge_sort = require('../../src/chapter_1/merge_sort_optimize_small_array')
const sort_data = require('../sort_data/sort_data')
const num_ascending = require('../sort_data/num_ascending')

describe('Merge sort test', () => {
  it('Basic sort test', done => {
    sort_data.forEach(data => {
      let arr = [...data]
      let sorted = [...data].sort(num_ascending)
      merge_sort(arr)
      for (let i = 1; i < arr.length; i++) {
        assert(arr[i] >= arr[i-1])
        assert(arr[i] === sorted[i])
      }
    })
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
