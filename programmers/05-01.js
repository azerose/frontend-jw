function solution(participant, completion) {
  participant.sort();
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];

  // for (let i = 0; i < participant.length; i++) {
  //   if (participant[i] !== completion[i]) {
  //     return participant[i];
  //   }
  // }
}
