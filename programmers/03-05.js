function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr % divisor === 0) {
      answer.push(arr[i]);
    } else if (arr / divisor == 0) {
      answer.push(-1);
    }
  }
  return answer;
}
