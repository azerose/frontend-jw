const convertStr = (str) => {
  let a = str.split(" ");
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    answer.push(subfunc(a[i]));
  }

  return answer.join(" ");
};

const subfunc = (str) => {
  let last = str.charAt(str.length - 1);
  let others = str.slice(0, str.length - 1);
  let newStr = others.toUpperCase() + last.toLowerCase();
  return newStr;
};

convertStr("hello world");
