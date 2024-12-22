function removeElement(nums: number[], val: number): number {
    let index = 0; 
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[index] = nums[i]; 
            index++;
        }
    }
    return index; 
    
};
/*
1. Create an index variable. keep track of what index were on 
2. Loop through index
3. create condition if current value doesnt equal val
4. set nums[index] to nums[i]
5. increment index
6. return index 
*/