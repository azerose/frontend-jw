function solution(n) {
  n = String(n);
  let answer = "";
  const spliter = n.split("");
  let a = spliter.sort((a, b) => b - a);
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    answer += a[i];
  }
  return Number(answer);
}
