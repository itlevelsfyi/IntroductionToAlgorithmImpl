import insertion_sort from '../../src/chapter_1/insertion_sort'

describe('Basic Sort Test', () => {
  it('Exercise-2.1.1', done => {
    let arr = [31, 41, 59, 26, 41, 58]
    insertion_sort(arr)
    for (let i = 1; i < arr.length; i++) {
      assert(arr[i] >= arr[i-1]
    }
    done()
  })
})
