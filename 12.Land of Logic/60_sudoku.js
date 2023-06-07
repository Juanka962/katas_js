/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, 
and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

    For

grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
        [4, 6, 5, 8, 7, 9, 3, 2, 1],
        [7, 9, 8, 2, 1, 3, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]]

the output should be
solution(grid) = true;

*/


function solution(grid) {

    //Files and colums
    for (let i = 0; i < grid.length; i++) {
        let stFile = new Set()
        let stColum = new Set();
        let x = 0;
        for (let x = 0; x < grid[i].length; x++) {
            stFile.add(grid[i][x]);
        }
        if (stFile.size != 9) return false
        while (x < grid[i].length) {
            stColum.add(grid[x][i])
            x++;
        }
        if (stColum.size != 9) return false
    }
    // matrix of 3

    for (let i = 0; i < grid.length; i += 3) {
        for (let j = 0; j < grid[i].length; j += 3) {
            let stMatrix = new Set();

            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    stMatrix.add(grid[x][y]);
                }
            }
            if (stMatrix.size != 9) return false
        }
    }

    return true;
}