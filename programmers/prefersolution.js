function solution(p) {
  let count = 0;
  let tmp = {};
  for (let i = 0; i < p.length; i++) {
    tmp[p[i][0]] = tmp[p[i][0]] || {};
    tmp[p[i][1]] = tmp[p[i][1]] || {};

    if (tmp[p[i][1]][p[i][0]] || tmp[p[i][0]][p[i][1]]) {
      count++;
    }

    tmp[p[i][0]][p[i][1]] = true;
  }

  return count;
}
