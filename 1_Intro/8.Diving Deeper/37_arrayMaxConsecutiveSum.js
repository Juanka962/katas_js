/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
solution(inputArray, k) = 8.

*/


function solution(inputArray, k) {
    let sum = 0;
    for(let i=0;i<inputArray.length-(k-1);i++){
      
      let sup=0
      for(let x = i; x<i+k;x++){
        sup+=inputArray[x]
        if(sum < sup) sum = sup
      }
      sup = 0
       
      
    }
  return sum
}

solution([2, 3, 5, 1, 6],2)