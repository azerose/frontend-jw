function solution(s) {
  var answer = "";
  let a;
  a = s.length;
  if (a % 2 === 0) {
    answer = s[a / 2 - 1] + s[a / 2];
  } else {
    answer = s[a / 2];
  }

  return answer;
}

//1.단어의 가운데 글자를 반환해야해
//2.그런데 만약 단어의 길이가 짝수라면 가운데 두글자를 반환해
//3.slice사용법
//4.인덱스 접근법
//5.인덱스에 접근해서 길이/2를 하면 가운데 값을 가져올수 있음
//
