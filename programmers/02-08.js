function solution(s) {
  var answer = true;
  let b = [];

  for (let i = 0; i < s.length; i++) {
    b.push(Number(s[i]));
  }

  if (b.includes(NaN)) {
    answer = false;
  } else if (s.length === 4 || s.length === 6) {
    answer = true;
  } else answer = false;
  return answer;
}
