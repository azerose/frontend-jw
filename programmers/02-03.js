function solution(phone_number) {
  var answer = "";
  for (let i = phone_number.length - 4; i < phone_number.length; i++) {
    answer += phone_number[i];
  }
  answer = answer.padStart(phone_number.length, "*");
  return answer;
}

solution("01033334444");
solution("027778888");

//1.문자열 전화번호가 주어짐
//2.뒷자리 4자리를 제외한 나머지 숫자를 *로 변경
//3.인덱스로 접근법
//4.만약 인덱스가 뒤에서부터  4번째자리가 아니면 *를 출력하고
//5.만약 인덱스가 뒤에서부터 4자리면 그대로 출력하기
