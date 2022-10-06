function solution(nums) {
  let a = [...new Set(nums)];
  if (nums.length / 2 > a.length) return a.length;
  else return nums.length / 2;
}
