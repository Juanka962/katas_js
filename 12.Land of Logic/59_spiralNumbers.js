/*
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

solution(n) = [[1, 2, 3],
               [8, 9, 4],
               [7, 6, 5]]



*/

function solution(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let direction = "right";
  
    while (top <= bottom && left <= right) {
      if (direction === "right") {
        for (let i = left; i <= right; i++) {
          matrix[top][i] = num++;
        }
        top++;
        direction = "down";
      } else if (direction === "down") {
        for (let i = top; i <= bottom; i++) {
          matrix[i][right] = num++;
        }
        right--;
        direction = "left";
      } else if (direction === "left") {
        for (let i = right; i >= left; i--) {
          matrix[bottom][i] = num++;
        }
        bottom--;
        direction = "up";
      } else if (direction === "up") {
        for (let i = bottom; i >= top; i--) {
          matrix[i][left] = num++;
        }
        left++;
        direction = "right";
      }
    }
    return matrix;
  }