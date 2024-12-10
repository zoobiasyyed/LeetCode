function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0; 
    let totalSum = 0; 
    let ans = Infinity; 
    for (let right = 0; right < nums.length; right++){
       totalSum += nums[right];  // Add current number to the running total

        // Shrink the window while the sum is >= target
        while (totalSum >= target) {
            // Update the minimum subarray length
            ans = Math.min(ans, right - left + 1);

            // Shrink the window by moving the left pointer inward
            totalSum -= nums[left];
            left++;
        }
    }

    // If ans was never updated, return 0; otherwise, return ans
    return ans === Infinity ? 0 : ans;
};