export class TwoSum {
    public twoSum(nums: number[], target: number): number[] {
        let diffs: Record<number, number> = {}
        for (let i = 0; i < nums.length; i++) {
            diffs[target - nums[i]] = i
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] in diffs && diffs[nums[i]] != i) {
                return [i, diffs[nums[i]]]
            }
        }
        return [0, 0]
    };
}
