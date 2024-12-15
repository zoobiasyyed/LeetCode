function twoSum(nums: number[], target: number): number[] {
    let numToIndex = {};
    for (let i = 0; i < nums.length; i++){
        numToIndex[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++){
        const numNeeded = target - nums[i];
        if (numToIndex[numNeeded] !== undefined && numToIndex[numNeeded] !== i){
            return [i, numToIndex[numNeeded]]
        }
    }
};