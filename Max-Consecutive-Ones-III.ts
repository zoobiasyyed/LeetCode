function longestOnes(nums: number[], k: number): number {
  let curr = 0;
  let left = 0;
  let zeroCount = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    curr = Math.max(curr, right - left + 1);
  }
  return curr;
}
