function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const myMap = new Map();
    for (let i = 0; i < nums.length; i++){
        if(myMap.has(nums[i])){ 
            const prevInd = myMap.get(nums[i]); 
            if (i - prevInd <= k){
                return true;
            }
        }
        myMap.set(nums[i], i);
    }
    return false; 
};