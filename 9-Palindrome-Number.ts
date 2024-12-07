function isPalindrome(x: number): boolean {
    const str = x.toString(); 

    let start = 0; 
    let end = str.length - 1

    if (str.length === 1){
        return true;
    }

    while (start < end){
        if (str[start] !== str[end]){
            return false
        }
        start++;
        end--;
    }
    return true; 
};