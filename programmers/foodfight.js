function solution(food) {
  let value = [];
  let answer = [];
  for (let i = 1; i < food.length; i++) {
    value.push(Math.floor(food[i] / 2));
  }
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value[i]; j++) {
      answer.push(i + 1);
    }
  }
  console.log(value);
  answer.push(0);
  for (let i = value.length - 1; i >= 0; i--) {
    for (let j = 0; j < value[i]; j++) {
      answer.push(i + 1);
    }
  }
  answer = answer.join("");
  return answer;
}
