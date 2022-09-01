function makeNumber(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (str !== num) {
      str = str + i + "-";
    }
  }
  return str;
}
