function solution(prices) {
  let HProfit = 0;
  let Max = prices[0];
  let Min = prices[0];
  for (let i of prices) {
    if (i < Min) {
      Min = i;
      Max = 0;
    }
    if (i > Max) {
      Max = i;
      if (HProfit < Max - Min) {
        HProfit = Max - Min;
      }
    }
  } // prices배열안의 요소로 반복문 돌리기
  let result = HProfit;

  return result;
}

solution([3, 2, 4, 8, 7]);
solution([3, 4, 1, 5, 4]);
