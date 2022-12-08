function solution(n, k) {
  let a = 12000;
  let b = 2000;
  if (n >= 10) {
    k = k - n / 10;
  }

  let answer = 0;
  answer = n * a + b * parseInt(k);
  return answer;
}
