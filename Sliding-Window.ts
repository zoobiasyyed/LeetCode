// Example 1: Given an array of positive integers
//nums and an integer k, find the length of the longest
//subarray whose sum is less than or equal to k. This is the
//problem we have been talking about above. We will now formally
// solve it.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findLength = function(nums, k) {
    // curr is the current sum of the window
    let left = 0, curr = 0, ans = 0;
    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];
        while (curr > k) {
            curr -= nums[left];
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}

//Example 2: You are given a binary string s (a string containing
//only "0" and "1"). You may choose up to one "0" and flip it to a
//"1". What is the length of the longest substring achievable that
//contains only "1"?

//For example, given s = "1101100111", the answer is 5.
//If you perform the flip at index 2, the string becomes 1111100111.

//our constaint is how many 0s are in the window, can have at most
//one zero in the window at any given time

var findLengthBinary = function (s : string) {
  let left = 0;
  let curr = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right++){
    if (s[right] === "0"){
      curr += 1;
    }

    while (curr > 1){
      if (s[left] === "0"){
        curr -= 1;

      }
      left ++;
    }

     ans = Math.max(ans, right - left + 1);
  }

  return ans; 
};
