function solution(n) {
  let watermelon = "수박";
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer = answer + watermelon;
  }
  answer = answer.slice(0, n);
  return answer;
}
