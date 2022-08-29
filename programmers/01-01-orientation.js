const num = () => {
  let n = 0;
  for (let i = 0; i < 100; i = i + 2) {
    n = n + 1;
  }
  return n;
};

num();
