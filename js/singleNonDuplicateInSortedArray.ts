/*

Leetcode 540. Single Element in a Sorted Array
https://leetcode.com/problems/single-element-in-a-sorted-array/

*/

export class NonDuplicateInSortedArray {
    public singleNonDuplicate(nums: number[]): number {
        let seen: Record<number, number> = {}
        for (let num of nums) {
            if (num in seen) {
                seen[num]++
            } else {
                seen[num] = 1
            }
        }

        for (let key in seen) {
            if (seen[key] == 1) {
                return Number(key)
            }
        }

        return -1
    };
}