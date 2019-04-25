const assert = require('assert')
const insertion_sort = require('../../src/chapter_1/insertion_sort_with_binary_search')
const sort_data = require('../sort_data/sort_data')
const num_ascending = require('../sort_data/num_ascending')

describe('Insertion sort with binary search test', () => {
  it('Basic data test', done => {
    sort_data.forEach(data => {
      let arr = [...data]
      let sorted = [...data].sort(num_ascending)
      insertion_sort(arr)
      for (let i = 1; i < arr.length; i++) {
        assert(arr[i] >= arr[i-1])
        assert(arr[i] === sorted[i])
      }
    })
    done()
  })
})
