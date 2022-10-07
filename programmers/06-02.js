// function solution(n, lost, reserve) {
//   const losted = [...lost];
//   lost = lost
//     .filter((student) => reserve.includes(student) === false)
//     .sort((a, b) => a - b);
//   reserve = reserve
//     .filter((student) => losted.includes(student) === false)
//     .sort((a, b) => a - b);

//   let answer = n - lost.length;

//   for (let i = 0; i < lost.length; i++) {
//     if (reserve.includes(lost[i] - 1)) {
//       answer++;
//       reserve.splice(reserve.indexOf(lost[i] - 1), 1);
//     } else if (reserve.includes(lost[i] + 1)) {
//       answer++;
//       reserve.splice(reserve.indexOf(lost[i] + 1), 1);
//     }
//   }
//   return answer;
// }
// 1. reserve 배열 - reserve[i]-1과 reserve[i]+1에게 전달해줄수있음
// 2. 체육복 x ->수업 x = lost.length - (reserve[i]-1 || reserve[i]+1)
// 3. 학생수

function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b);

  let answer = n - lost.length;
  lost.forEach((student) => {
    const prev = reserve.indexOf(student - 1); // 이전에 있는 번호
    const next = reserve.indexOf(student + 1); // 이후에 있는 번호
    if (prev !== -1) {
      answer++;
      reserve.splice(prev, 1);
    } else if (next !== -1) {
      answer++;
      reserve.splice(next, 1);
    }
  });
  return answer;
}
