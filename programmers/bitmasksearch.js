function solution(arr, k, t) {
  let count = 0;
  const n = arr.length;
  for (let i = 0; i < 1 << n; i++) {
    let sum = 0;
    let selected = 0;
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        sum += arr[j];
        selected++;
      }
    }
    if (selected >= k && sum <= t) {
      count++;
    }
  }
  return count;
}
