import { FizzBuzz } from "../fizzBuzz"

describe("FizzBuzz leetcode problem", () => {
    it("should only print [1, 2, Fizz] if input is 3", () => {
        const fizzBuzz = new FizzBuzz();
        const num: number = 3;
        const result: string[] = ["1", "2", "Fizz"];
        expect(fizzBuzz.fizzBuzz(num)).toEqual(result);
    });

    it("should print [1, 2, Fizz, 4, Buzz] if input is 5", () => {
        const fizzBuzz = new FizzBuzz();
        const num: number = 5;
        const result: string[] = ["1", "2", "Fizz", "4", "Buzz"];
        expect(fizzBuzz.fizzBuzz(num)).toEqual(result);
    });

    it("should print including FizzBuzz if input is 15", () => {
        const fizzBuzz = new FizzBuzz();
        const num: number = 15;
        const result: string[] = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"];
        expect(fizzBuzz.fizzBuzz(num)).toEqual(result);
    });
});