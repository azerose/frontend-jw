function solution(s) {
  s = s.split(" ");
  let a = [];
  for (let i = 0; i < s.length; i++) {
    let k = [];
    for (let j = 0; j < s[i].length; j++) {
      if (j % 2 === 0) {
        k.push(s[i][j].toUpperCase());
      } else {
        k.push(s[i][j].toLowerCase());
      }
    }
    a.push(k.join(""));
  }

  return a.join(" ");
}

//짝수의 인덱스를 대문자로 ,홀수의 알파벳은 소문자로
//if문 사용 나누기

//split을 사용하여 공백을 기준으로 나누기
//이중for문 사용하여 배열안의 인덱스접근후 나누기
//결과를 join(" ")를 사용하여 리턴
