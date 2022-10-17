function solution(n) {
  var answer = 0;
  let rest = [];
  for (let i = n; i / 3 >= 0.33; i = i / 3) {
    rest.push(Math.floor(i % 3));

    // console.log(rest)
  }
  for (let i = rest.length - 1; i >= 0; i--) {
    // console.log(rest[i])
    let rs = rest[rest.length - (i + 1)];
    // console.log(rs)
    // rest[rest.length-1]
    let sq = Math.floor(3 ** i);
    console.log(sq);
    answer += rs * sq;

    // console.log(sq)
    // console.log(rest[rest.length-(i+1)]*sq)
  }
  return answer;
}
