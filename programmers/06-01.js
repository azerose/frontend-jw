function solution(s) {
  let arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;
  for (let i = 0; i < arr.length; i++) {
    let arr1 = answer.split(arr[i]);
    answer = arr1.join(i);
  }

  return Number(answer);
}
