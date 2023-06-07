/*
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]

the output should be
solution(matrix) = 6.

Here are all 6 different 2 × 2 squares:

    1 2
    2 2
    2 1
    2 2
    2 2
    2 2
    2 2
    1 2
    2 2
    2 3
    2 3
    2 1


*/


function solution(matrix) {
    const cont = new Set();
    for (let i = 0; i < matrix.length - 1; i++) {
      for (let x = 1; x < matrix[i].length; x++) {
        const sup1 = [matrix[i][x - 1], matrix[i][x]];
        const sup2 = [matrix[i + 1][x - 1], matrix[i + 1][x]];
        cont.add(JSON.stringify([sup1, sup2]));
      }
    }
    return cont.size;
  }