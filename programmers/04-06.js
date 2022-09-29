function solution(n, m) {
  const greatest = (n, m) => {
    if (m === 0) return n;
    return greatest(m, n % m);
  };
  return [greatest(n, m), (n * m) / greatest(n, m)];
}
