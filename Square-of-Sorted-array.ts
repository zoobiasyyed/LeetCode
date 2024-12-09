function sortedSquares(nums: number[]): number[] {
  let arr: number[] = [];
  if (nums.length === 0) {
    return [];
  }

  let start = 0;
  let end = nums.length;
  while (start < end) {
    const square = Math.pow(nums[start], 2);
    arr.push(square);
    start++;
  }
  arr.sort((a, b) => a - b);
  return arr;
}
