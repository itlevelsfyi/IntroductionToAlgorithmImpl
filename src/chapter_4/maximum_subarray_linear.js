const find_maximum_subarray = A => {
  let max_start = -1
  let max_end = -1
  let max = -Infinity
  let sum = 0
  let curr_start = -1
  for (let i = 0; i < A.length; i++) {
    sum += A[i]
    if (sum < 0) {
       sum = 0
       curr_start = -1
    } else {
      if (curr_start < 0) {
        curr_start = i
      }
    }
    if (sum > max) {
      max_start = curr_start > -1 ? curr_start : i
      max_end = i
      max = sum
    } 
  }
}

module.exports = find_maximum_subarray
