function checkIfPangram(sentence: string): boolean {
    const map = new Map(); 
    for (let i = 0; i < sentence.length; i++){
        let nums = sentence[i]; 
        map.set(nums, i);
        if(map.size === 26){
            return true;
        }
    }
    return false; 
};