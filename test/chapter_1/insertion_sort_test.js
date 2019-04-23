const assert = require('assert')
const insertion_sort = require('../../src/chapter_1/insertion_sort')
const insertion_sort_descending = require('../../src/chapter_1/insertion_sort_descending')
const sort_data = require('../sort_data/sort_data')

describe('Basic Sort Test', () => {
  it('Exercise-2.1.1', done => {
    sort_data.forEach(data => {
      let arr = [...data]
      let sorted = [...data].sort()
      insertion_sort(arr)
      for (let i = 1; i < arr.length; i++) {
        assert(arr[i] >= arr[i-1])
        assert(arr[i] === sorted[i])
      }
    })
    done()
  })
  it('Exercise-2.1.2', done => {
    sort_data.forEach(data => {
      let arr = [...data]
      let sorted = [...data].sort()
      insertion_sort_descending(arr)
      for (let i = 1; i < arr.length; i++) {
        assert(arr[i] <= arr[i-1])
        assert(arr[i] === sorted[i])
      }
    })
    done()
  })
})
