function solution(a, b) {
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let sum = 0;
  for (let i = 0; i < a - 1; i++) {
    sum += month[i];
  }
  sum = sum + b;
  sum = (sum + 11) % 7;
  return day[sum];
}
