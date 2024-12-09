function reverseWords(s: string): string {
let chars = s.split(""); // Convert to mutable array
    let left = 0;

    for (let right = 0; right <= chars.length; right++) {
        // When we hit a space or reach the end of the string
        if (right === chars.length || chars[right] === " ") {
            // Reverse the current word in-place
            let l = left, r = right - 1;
            while (l < r) {
                let temp = chars[l];
                chars[l] = chars[r];
                chars[r] = temp;
                l++;
                r--;
            }
            left = right + 1; // Move to the start of the next word
        }
    }

    return chars.join(""); 
};