function solution(num) {
  var answer = 0;
  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
    } else return (answer = i);
  }
  return (answer = -1);
}
