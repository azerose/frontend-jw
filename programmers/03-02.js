function solution(s) {
  let Pcount = 0;
  let Ycount = 0;
  s = s.toLowerCase();
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      Pcount = Pcount + 1;
    }
    if (s[i] === "y") {
      Ycount++;
    }
  }
  if (Pcount === Ycount) {
    return true;
  } else if (Pcount !== Ycount) {
    return false;
  }
}
