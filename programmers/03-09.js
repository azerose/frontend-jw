function solution(x) {
  let y = String(x);
  let sum = 0;
  for (let i = 0; i < y.length; i++) {
    sum = sum + Number(y[i]);
  }
  if (x % sum === 0) {
    return true;
  } else return false;
}
