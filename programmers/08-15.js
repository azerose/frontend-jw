function solution(a, b, n) {
  var answer = 0;
  let res = 0;
  while (n >= a) {
    res = n % a;
    n = Math.floor(n / a) * b;
    answer += n;
    n += res;
  }

  return answer;
}
