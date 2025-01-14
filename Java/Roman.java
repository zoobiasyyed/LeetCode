class Solution {
    public int romanToInt(String s) {
        Map<Character, Integer> map = new HashMap<>();

        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int result = 0;
    for (int i = 0; i < s.length(); i++) {
        int current = map.get(s.charAt(i));
        int next = (i < s.length() - 1) ? map.get(s.charAt(i + 1)) : 0;

        if (current < next) {
            result -= current; // Subtract if smaller value comes first
        } else {
            result += current; // Add otherwise
        }
    }

    return result;//result


}
}
