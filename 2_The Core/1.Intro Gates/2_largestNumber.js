/*
Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
solution(n) = 99.

*/

function solution(n) {
    return Number('9'.repeat(n));
}

function solution(n) {
    let i = 0;
    let sup = ''
    while(i<n){
      sup+='9'
      i++
    }
  return Number(sup)
}