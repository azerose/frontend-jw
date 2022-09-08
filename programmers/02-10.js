function solution(n) {
  var answer = 0;
  let sn = String(n);
  for (let i = 0; i < sn.length; i++) {
    answer += Number(sn[i]);
  }

  return answer;
}
