function solution(n) {
  let number = ["4", "13"];
  let index = 0;

  while (true) {
    if (Math.floor(number.length / 2) === n) {
      break;
    }
    number.push(number[index] + "4");
    number.push(number[index] + "13");
    index += 1;
  }

  for (let i = 0; i < number.length; i++) {
    number[i] = parseInt(number[i]);
  }

  number.sort((a, b) => a - b);

  return number[n - 1];
}
