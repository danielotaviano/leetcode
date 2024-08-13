function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let votes = 0;

  for (let n of nums) {
    if (votes === 0) {
      candidate = n;
      votes = 1;
    } else if (n === candidate) {
      votes++;
    } else {
      votes--;
    }
  }

  return candidate;
}
