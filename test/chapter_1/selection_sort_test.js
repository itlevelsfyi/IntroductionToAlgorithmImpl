const assert = require('assert')
const selection_sort = require('../../src/chapter_1/selection_sort')
const sort_data = require('../sort_data/sort_data')
const num_ascending = require('../sort_data/num_ascending')

describe('Selection Sort Test', () => {
  it('Basic Test', done => {
    sort_data.forEach(data => {
      let arr = [...data]
      let sorted = [...data].sort(num_ascending)
      selection_sort(arr)
      console.log(`arr = ${JSON.stringify(arr)}`)
      console.log(`sorted = ${JSON.stringify(sorted)}`)
      for (let i = 1; i < arr.length; i++) {
        assert(arr[i] >= arr[i-1])
        assert(sorted[i] === arr[i])
      }
    })
    
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
