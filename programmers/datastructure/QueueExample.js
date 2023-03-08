function solution(priorities, location) {
  // location === index값
  let max;
  let value;
  let count = 0;
  while (true) {
    max = Math.max.apply(null, priorities);
    value = priorities.shift();
    if (value === max) {
      count++;
      if (location === 0) {
        return count;
      }
    } else {
      priorities.push(value);
    }
    location--;
    if (location == -1) {
      location = priorities.length - 1;
    }
  }
}
