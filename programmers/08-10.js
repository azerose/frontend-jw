function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i < count + 1; i++) {
    result = result + price * i;
  }

  return money - result < 0 ? -(money - result) : 0;
}
