function solution(answers) {
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let right = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === arr1[i % 5]) right[0]++;
    if (answers[i] === arr2[i % 8]) right[1]++;
    if (answers[i] === arr3[i % 10]) right[2]++;
  }
  let a = Math.max(right[0], right[1], right[2]);
  let arrA = [];
  for (let i = 0; i < 3; i++) {
    if (right[i] === a) {
      arrA.push(i + 1);
    }
  }
  return arrA;
}

// 1번 수포자 :12345반복
// 2번 수포자 :21232425반복
// 3번 수포자 :3311224455반복
