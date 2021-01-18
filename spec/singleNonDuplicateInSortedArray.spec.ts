import { NonDuplicateInSortedArray } from "../singleNonDuplicateInSortedArray"

describe("Find the single element in the array that is not a duplicate", () => {
    it("Should return -1 if no duplicates", () => {
        const nonDuplicate = new NonDuplicateInSortedArray();
        const arr: number[] = [1, 1, 3, 3, 9, 9, 15, 15];
        const result: number = -1;
        expect(nonDuplicate.singleNonDuplicate(arr)).toEqual(result);
    });

    it("Should return 2 as only single", () => {
        const nonDuplicate = new NonDuplicateInSortedArray();
        const arr: number[] = [1, 1, 2, 3, 3, 4, 4, 8, 8];
        const result: number = 2;
        expect(nonDuplicate.singleNonDuplicate(arr)).toEqual(result);
    });
});