function bigNum(str) {
  let biggest = 0;
  let num;
  for (let i = 0; i < str.length; i++) {
    num = Number(str[i]);
    if (num > biggest) {
      biggest = num;
    }
  }
  return biggest;
}
