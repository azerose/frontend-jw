// const isBonus = ["S", "D", "T"];

// function solution(dartResult) {
//   const answer = [];

//   let score = "";
//   for (let i = 0; i < dartResult.length; i++) {
//     if (isNaN(dartResult[i]) === false) {
//       // 숫자 타입으로 변환한 데이터의 결과과 NaN 값이 아닌 경우(=숫자인 경우)
//       score += dartResult[i];
//     } else {
//       // 숫자 타입으로 변환한 데이터가 NaN 값인 경우(=숫자가 아닌 경우)

//       // 보너스: S,D,T
//       if (isBonus.includes(dartResult[i])) {
//         score = Number(score); // 정수를 숫자 타입으로 변경
//         if (dartResult[i] === "D") {
//           score = Math.pow(score, 2);
//         } else if (dartResult[i] === "T") {
//           score = Math.pow(score, 3);
//         }
//         answer.push(score);
//         score = "";
//       } else {
//         // 옵션 처리
//         if (dartResult[i] === "#") {
//           // 아차상인경우
//           answer[answer.length - 1] *= -1;
//         } else {
//           // 스타상인 경우 : 해당점수에 2를 곱한다
//           answer[answer.length - 1] *= 2;

//           // 현재 게임이 2번쨰 게임 이상인 경우에만
//           if (answer.length > 1) {
//             answer[answer.length - 2] *= 2;
//           }
//         }
//       }

//       // 보너스를 찾기위해 배열에 저장
//     }
//   }
//   let sum = 0;
//   for (let i = 0; i < answer.length; i++) {
//     sum += answer[i];
//   }
//   return sum;
// }

const isBonus = ["S", "D", "T"];

function solution(dartResult) {
  let score = ""; // 문자열에 있는 점수 데이터
  let currentScore = 0; // 현재턴의 점수
  let last = false; // 점수를 최종 저장할 시점을 찾음
  const answer = dartResult
    .split("")
    .reduce((acc, cur, i) => {
      if (isNaN(cur) === false) {
        score += cur;
      } else if (isBonus.includes(cur)) {
        score = Number(score);
        const squared = isBonus.indexOf(cur) + 1; // 0(S) , 1(D) , 2(T)
        currentScore = score ** squared;
        score = ""; // 문자열에서 가져오는 점수 데이터 초기화(다음턴의 점수)
        if (isNaN(dartResult[i + 1]) === false || i + 1 === dartResult.length) {
          last = true; // 옵션이 없기때문에 현재 턴이 종료
        }
      } else {
        last = true; // 옵션을 만나고 현재턴이 종료
        if (cur === "*") {
          currentScore *= 2;
          if (acc.length > 0) {
            acc[acc.length] *= 2;
          }
        } else {
          currentScore *= -1;
        }
      }
      if (last) {
        acc.push(currentScore);
      }
      return acc;
    }, [])
    .reduce((acc, cur) => acc + cur);
}
