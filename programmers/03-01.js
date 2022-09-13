function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
        return b - a;
      })
    );
    answer[[commands[i][2]]];
  }

  return answer;
}

//1.commands를 읽어오기
//
