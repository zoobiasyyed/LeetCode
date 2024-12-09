function reverseOnlyLetters(s: string): string {
    const newArr = s.split("");  
    let left = 0; 
    let right = newArr.length - 1; 

    while (left < right) {
        if (!newArr[left].match(/[a-zA-Z]/)) {
            left++;
        }
        else if (!newArr[right].match(/[a-zA-Z]/)) {
            right--;
        }
        else {
            let temp = newArr[left];
            newArr[left] = newArr[right];
            newArr[right] = temp;
            left++;
            right--;
        }
    }
    return newArr.join("");
};