function minStartValue(nums: number[]): number {
  let totalSum = 0;
  let startValue = 1;
  let minSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
    minSum = Math.min(minSum, totalSum);
  }
  startValue = 1 - minSum;
  return startValue;
}
//your mom
