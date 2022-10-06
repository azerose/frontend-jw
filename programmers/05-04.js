function solution(n) {
  let answer = 0;
  let a = 0;
  let b = 1;
  if (n <= 1) {
    return n;
  } else {
    answer = 0;
    a = 0;
    b = 1;
    for (let i = 2; i <= n; i++) {
      answer = (a + b) % 1234567;
      a = b;
      b = answer;
    }
    return answer;
  }
}
