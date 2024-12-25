function repeatedCharacter(s: string): string {
    let seen = new Set();
    for (const c of s) {
        if (seen.has(c)) {
            return c;
        }
        
        seen.add(c);
    }
    
    return " ";
};