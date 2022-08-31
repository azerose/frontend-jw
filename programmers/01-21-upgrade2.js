const thirty = [4, 6, 9, 11];
const thirtyone = [1, 3, 5, 7, 8, 10, 12];
function days(month) {
  if (thirty.includes(month)) {
    return 30;
  } else if (thirtyone.includes(month)) {
    return 31;
  } else return 28;
}
