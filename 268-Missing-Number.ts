function missingNumber(nums: number[]): number { 
    let n = nums.length; 
    let sum = (n * (n + 1))/2; 
    let actSum = nums.reduce((x, y) => x + y, 0); 
    if (sum !== actSum){
        return sum-actSum;
    }
    return 0;
    
};