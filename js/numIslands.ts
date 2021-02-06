/*

Leetcode 200. Number of Islands
https://leetcode.com/problems/number-of-islands/

*/

const LAND = "1"
const WATER = "0"
const VISITED = "2"


export class NumIslands {
    public numIslands(grid: string[][]): number {
        var islands = 0

        // Run DFS
        for (var row = 0; row < grid.length; row++) {
            for (var col = 0; col < grid[row].length; col++) {
                if (grid[row][col] == LAND) {
                    this.dfs(grid, row, col);
                    islands++;
                }
            }
        }
        return islands
    };

    public dfs(grid: string[][], row: number, col: number) {
        grid[row][col] = VISITED;
        var neighbors = this.getNeighbors(grid, row, col);
        neighbors.forEach(neighbor => {
            if (grid[neighbor[0]][neighbor[1]] == LAND) {
                this.dfs(grid, neighbor[0], neighbor[1]);
            }
        });
    };

    public getNeighbors(grid: string[][], row: number, col: number): number[][] {
        var neighbors: number[][] = [];
        if (row - 1 >= 0 && grid[row - 1][col] == LAND) {
            neighbors.push([row - 1, col]);
        }
        if (row + 1 >= 0 && row + 1 < grid.length && grid[row + 1][col] == LAND) {
            neighbors.push([row + 1, col]);
        }
        if (col - 1 >= 0 && grid[row][col - 1] == LAND) {
            neighbors.push([row, col - 1]);
        }
        if (col + 1 >= 0 && col + 1 < grid[row].length && grid[row][col + 1] == LAND) {
            neighbors.push([row, col + 1]);
        }
        return neighbors;
    }
}

