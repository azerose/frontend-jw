function solution(arr) {
  var answer = [];
  let arr1 = [];
  let arr2 = [];
  if (arr.length === 1) arr2.push(-1);
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[i]);
  }
  answer.sort((a, b) => {
    return b - a;
  });
  arr1 = answer.pop();
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr1) {
      arr2.push(arr[j]);
    }
  }
  return arr2;
}
