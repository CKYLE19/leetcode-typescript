import { TwoSum } from "../twoSum";

describe("two sum suite desc", () => {
    it("Should find 2 & 7 = 9", () => {
        const twoSum = new TwoSum();
        const nums: number[] = [2, 7, 11, 15];
        const target: number = 9
        const expected: number[] = [0, 1];
        expect(twoSum.twoSum(nums, target)).toEqual(expected);
    });

    it("Should be [0, 0]", () => {
        const twoSum = new TwoSum();
        const nums: number[] = [];
        const target: number = 9
        const expected: number[] = [0, 0];
        expect(twoSum.twoSum(nums, target)).toEqual(expected);
    });
});