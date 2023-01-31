function threeSum(arr, target) {
  arr.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let currSum = arr[i] + arr[left] + arr[right];
      if (currSum === target) {
        return target;
      }
      if (Math.abs(currSum - target) < Math.abs(closest - target)) {
        closest = currSum;
      }
      if (currSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closest;
}

module.exports = threeSum;
