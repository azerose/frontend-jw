function solution(grade) {
  const n = grade.length;
  const rank = new Array(n).fill(1);
  const sortedIndex = [...grade.keys()].sort((a, b) => grade[b] - grade[a]);

  for (let i = 0; i < n; i++) {
    const currentIndex = sortedIndex[i];
    if (i > 0 && grade[currentIndex] === grade[sortedIndex[i - 1]]) {
      rank[currentIndex] = rank[sortedIndex[i - 1]];
    } else {
      rank[currentIndex] = i + 1;
      +1;
    }
  }

  return rank;
}
