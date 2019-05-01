const find_cross_maximum_subarray = (A,low,mid,high) => {
  let left_sum = -Infinity
  let sum = 0
  let max_left = mid
  for (let i = mid; i >=low; i--) {
    sum += A[i]
    if (sum > left_sum) {
      left_sum = sum
      max_left = i
    }
  }
  let right_sum = -Infinity
  sum = 0
  let max_right = mid
  for(let j = mid+1; j <= high; j++) {
    sum += A[j]
    if (sum > right_sum) {
      right_sum = sum
      max_right = j
    }
  }
  return [max_left, max_right, left_sum+right_sum]
}

const find_maximum_subarray = (A,low,high) => {
  if (low === high) {
    return [low,high,A[low]]
  } else {
    const mid = Math.floor((low+high)/2)
    let [left_low, left_high, left_max] = find_maximum_subarray(A,low,mid)
    let [right_low, right_high, right_max] = find_maximum_subarray(A,mid+1,high)
    let [cross_low, cross_high, cross_max] = find_cross_maximum_subarray(A,low,mid,high)
    if (left_max >= right_max && left_max >= cross_max) {
      return [left_low, left_high, left_max]
    } else if (right_max >= left_max && right_max >= cross_max) {
      return [right_low, right_high, right_max]
    } else {
      return [cross_low, cross_high, cross_max]
    }
  }
}
