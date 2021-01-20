/*

Leetcode 412. FizzBuzz
https://leetcode.com/problems/fizz-buzz/

Write a program that outputs the string 
representation of numbers from 1 to n.

But for multiples of three it should 
output “Fizz” instead of the number 
and for the multiples of five output 
“Buzz”. For numbers which are multiples 
of both three and five output “FizzBuzz”.

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