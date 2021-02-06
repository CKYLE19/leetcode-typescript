import { NumIslands } from "../js/numIslands"

const ZERO = "0"
const ONE = "1"

describe("getNeighbors retrieves closest immediate elements in array", () => {
    it("should get all 4 directional neighbors if they are valid", () => {
        const numIslands = new NumIslands();
        const grid: string[][] = [
            [ZERO, ONE, ZERO],
            [ONE, ONE, ONE],
            [ZERO, ONE, ZERO],
        ]
        const row: number = 1;
        const col: number = 1;
        const result: number[][] = [
            [0, 1],
            [1, 0],
            [1, 2],
            [2, 1]
        ];
        numIslands.getNeighbors(grid, row, col).forEach(neighbor => {
            expect(result).toContain(neighbor);
        });
    });
    it("should ignore out of bounds directionals", () => {
        const numIslands = new NumIslands();
        const grid: string[][] = [
            [ZERO, ONE, ZERO],
            [ONE, ONE, ONE],
            [ZERO, ONE, ZERO],
        ]
        const row: number = 1;
        const col: number = 0;
        const result: number[][] = [
            [1, 1]
        ];
        numIslands.getNeighbors(grid, row, col).forEach(neighbor => {
            expect(result).toContain(neighbor);
        });
    });
    it("should return nothing for invalid coordinates", () => {
        const numIslands = new NumIslands();
        const grid: string[][] = [
            [ZERO, ONE, ZERO],
            [ONE, ONE, ONE],
            [ZERO, ONE, ZERO],
        ]
        const row: number = -1;
        const col: number = -1;
        const result: number[][] = [];
        expect(numIslands.getNeighbors(grid, row, col)).toEqual(result);
    });
});