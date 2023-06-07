/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates 
the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]

the output should be

solution(matrix) = [[1, 2, 1],
                    [2, 1, 1],
                    [1, 1, 1]]


*/

function solution(matrix) {
let _matrix = []

  for (let y in matrix) {
    _matrix[y] = []
    for (let x in matrix[y]) {
      y = +y
      x = +x

        let counter = 0
        if (matrix[y][x - 1] === true) counter++
        if (matrix[y][x + 1] === true) counter++
        if (matrix[y + 1] && matrix[y + 1][x + 1] === true) counter++
        if (matrix[y + 1] && matrix[y + 1][x] === true) counter++
        if (matrix[y + 1] && matrix[y + 1][x - 1] === true) counter++
        if (matrix[y - 1] && matrix[y - 1][x + 1] === true) counter++
        if (matrix[y - 1] && matrix[y - 1][x] === true) counter++
        if (matrix[y - 1] && matrix[y - 1][x - 1] === true) counter++
        _matrix[y].push(counter)
      
    }
  }
  return _matrix
}