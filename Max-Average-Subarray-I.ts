//You are given an integer array nums consisting of n elements, and an integer k.

//Find a contiguous subarray whose length is equal to k that has the
//maximum average value and return this value. Any answer with a
//calculation error less than 10-5 will be accepted.

function findMaxAverage(nums: number[], k: number): number {
    let curr = 0;
    for (let i = 0; i < k; i++){
        curr += nums[i]
    }

    let ans = curr;
    for (let i = k; i < nums.length; i++){
        curr = curr + nums[i] - nums[i-k];
        ans = Math.max(ans, curr/k)
    }
    return ans
};
