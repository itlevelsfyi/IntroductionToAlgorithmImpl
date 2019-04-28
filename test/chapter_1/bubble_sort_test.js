const assert = require('assert')
const bubble_sort = require('../../src/chapter_1/bubble_sort')
const sort_data = require('../sort_data/sort_data')
const num_ascending = require('../sort_data/num_ascending')

describe('Bubble sort test', () => {
  it('Basic sort test', done => {
    sort_data.forEach(data => {
      let arr = [...data]
      let sorted = [...data].sort(num_ascending)
      bubble_sort(arr)
      for (let i = 1; i < arr.length; i++) {
        assert(arr[i] >= arr[i-1])
        assert(arr[i] === sorted[i])
      }
    })
    done()
  })
  it('One element test', done => {
    let arr = [2]
    bubble_sort(arr)
    assert(arr.length === 1)
    assert(arr[0] === 2)
    done()
  })
})
