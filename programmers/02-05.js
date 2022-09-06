function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  answer = answer / arr.length;

  return answer;
}

//1.배열의 평균구하기
//2.배열의 인덱스 접근하여 각 요소 읽어오기
//3.요소의 합 구하기
//4.합을 arr.length만큼 나누기
