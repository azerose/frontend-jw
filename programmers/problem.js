function solution(cards) {
  let arr = [];
  let idx;
  for (let i = 0; i < cards.length; i++) {
    arr.push(binarySearch(cards, cards[i]));
  }
  idx = arr.findIndex(-1);
  console.log(idx);
}

const binarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = parseInt((start + end) / 2);
    if (target === arr[mid]) {
      return mid;
    } else {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
};

solution([1, 3, 2, 2, 5, 5, 1]);
