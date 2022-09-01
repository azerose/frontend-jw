function countLetter(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      count = count + 1;
    }
  }
  return count;
}
