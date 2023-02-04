const foo = (games) => {
  let score = 0;
  games = games.map((el) => el.split(":"));
  for (let i = 0; i < games.length; i++) {
    console.log(games[i]);
    if (games[i][0] > games[i][1]) {
      score += 3;
    }
    if (games[i][0] === games[i][1]) {
      score += 1;
    }
  }
  return score;
};
