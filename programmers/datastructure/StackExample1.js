function solution(s) {
  let answer = [];
  for (i of s) {
    if (i === "(") {
      answer.push(i);
    } else if (answer.length === 0) {
      return false;
    } else answer.pop();
  }
  return answer.length ? false : true;
}
