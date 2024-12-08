function reverseString(s: string[]): void {
  const start = 0;
  const end = s.length - 1;
  let srt = start;
  let e = end;
  while (srt < e) {
    let temp = s[srt];
    s[srt] = s[e];
    s[e] = temp;
    srt++;
    e--;
  }
}
