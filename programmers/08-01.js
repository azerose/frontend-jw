const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  new_id = new_id.toLowerCase();
  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) answer += new_id[i];
  }

  // 3단계 : 마침표가(.)가 2번이상 연속된 부분을 하나의 마침표로 치환
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  if (answer[0] === ".") {
    answer = answer.substring(1);
  }
  function removeLastDot() {
    if (answer.at(-1) === ".") {
      answer = answer.substring(0, answer.length - 1);
    }
  }
  // 5 단계 :빈 문자열 이라면 'a'를 대입
  if (answer === "") {
    answer = "a";
  }

  removeLastDot();
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
  }
  removeLastDot();

  // 7단계 문자열의 길이가 2자 이하라면 마지막 글자를 3자리 문자가 될때까지 반복해서 추가
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer.at(-1));
  }
  return answer;
}
