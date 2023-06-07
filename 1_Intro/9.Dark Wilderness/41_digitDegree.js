/*
Let's define digit degree of some positive integer as the number of times 
we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

Example

    For n = 5, the output should be
    solution(n) = 0;

*/


function solution(n) {
    let nums= 0
    let sup = n
    if(n<10) return 0;
    while(sup>=10){
     sup = sup.toString().split('').reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue)
     );
     nums++;
   }
  
  return nums;
    
}