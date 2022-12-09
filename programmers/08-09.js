function solution(left, right) {
  let element = [];
  let arr = [];
  let Add = [];
  let Minus = [];
  let sum = 0;
  let sub = 0;
  for (let i = left; i <= right; i++) {
    element.push(i);
  }
  for (let j = 0; j < element.length; j++) {
    for (let i = 1; i <= element[j]; i++) {
      if (element[j] % i === 0) {
        arr.push(i);
      }
    }
    if (arr.length % 2 === 0) {
      Add.push(element[j]);
      arr = [];
    } else if (arr.length % 2 === 1) {
      Minus.push(element[j]);
      arr = [];
    }
  }
  for (let i = 0; i < Add.length; i++) {
    sum += Add[i];
  }
  for (let i = 0; i < Minus.length; i++) {
    sub += Minus[i];
  }

  return sum - sub;
}
