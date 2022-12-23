function solution(sizes) {
  let width = [];
  let height = [];
  let result = 1;
  let WMax = 0;
  let HMax = 0;
  let idx = 0;
  let tmp = [];

  for (let i = 0; i < sizes.length; i++) {
    width.push(sizes[i][0]);
    height.push(sizes[i][1]);
  }
  console.log(width);
  console.log(height);
  WMax = Math.max(...width);
  HMax = Math.max(...height);
  if (WMax > HMax) {
    idx = height.indexOf(HMax);
    tmp = height[idx];
    height[idx] = width[idx];
    width[idx] = tmp;
  } else if (WMax < HMax) {
    idx = width.indexOf(WMax);
    tmp = width[idx];
    width[idx] = height[idx];
    height[idx] = tmp;
  }
  console.log(width);
  console.log(height);
  for (let i = 0; i < width.length; i++) {
    if (width[i] > height[i]) {
      tmp = height[i];
      height[i] = width[i];
      width[i] = tmp;
    }
  }
  console.log(width);
  console.log(height);
  width.sort((a, b) => a - b);
  height.sort((a, b) => a - b);

  result = width.at(-1) * height.at(-1);
  return result;
}
