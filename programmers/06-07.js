// function solution(board, moves) {
//   let answer = 0;
//   const bucket = [];
//   for (let i = 0; i < moves.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       const doll = board[j][moves[i] - 1];
//       if (doll !== 0) {
//         board[j][moves[i] - 1] = 0;
//         if (doll === bucket[bucket.length - 1]) {
//           bucket.pop();
//           answer += 2;
//           break;
//         }

//         bucket.push(doll);
//         break;
//       }
//     }
//   }
//   return answer;
// }

function solution(board, moves) {
  let answer = 0;
  const bucket = []; // 인형들이 담겨지는 배열
  moves.forEach((move) => {
    let pick = false; // 반복문을 더 이상 실행 시키지 않게 하는 변수 값
    board.forEach((location) => {
      const doll = location[move - 1];
      if (pick === false) {
        if (doll !== 0) {
          location[move - 1] = 0;
          if (doll === bucket.at(-1)) {
            bucket.pop();
            answer += 2;
          } else {
            bucket.push(doll);
          }
          bucket.push(doll);
          pick = true;
        }
      }
    });
  });
  return answer;
}
