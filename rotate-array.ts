function reverse<T>(nums: T[], start: number, end: number): void {
  let memory: T;
  let ep = end;
  let sp = start;

  while (sp < ep) {
    memory = nums[sp];
    nums[sp] = nums[ep];
    nums[ep] = memory;

    ep--;
    sp++;
  }
}

function rotate(nums: number[], k: number): void {
  if (k === 0) return;

  const realK = nums.length < k ? k % nums.length : k;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, realK, nums.length - 1);
  reverse(nums, 0, realK - 1);
}
