/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.
*/

function solution(inputArray) {
    let max = inputArray[0]*inputArray[1] ;
    for(let i = 2;i<inputArray.length;i++){
      let possibleMax = inputArray[i]* inputArray[i-1];
      if(max <possibleMax){
        max = possibleMax
      }
    }
    return max;
}

solution([3, 6, -2, -5, 7, 3])