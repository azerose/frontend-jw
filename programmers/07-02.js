// function solution(s) {
//   let count = 0;
//   let remove = 0;
//   while (s !== "1") {
//     count++;
//     let tmp = "";
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === "0") {
//         remove++;
//         continue;
//       }
//       tmp += s[i];
//     }
//     s = tmp.length;
//     s = s.toString(2);
//   }
//   return [count, remove];
// }

// function solution(s) {
//   let zero = 0;
//   let count = 0;

//   while (s !== "1") {
//     count++;
//     let convert = s.replaceAll("0", "");
//     zero += s.length - convert.length;
//     s = convert.length.toString(2);
//   }

//   return [count, zero];
// }

// 재귀함수

function solution(s) {
  let [count, remove] = [0, 0];
  function recursion(s) {
    if (s === "1") return [count, remove];
    count++;
    const removeList = s.split("").filter((el) => el === "0");
    remove += removeList.length;

    s = s.split("").filter((el) => el === "1");
    return recursion(s.length.toString(2));
  }
  return recursion(s);
}
