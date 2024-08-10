function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }

  return k + 1;
}
