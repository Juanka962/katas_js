/*
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be
solution(s) = 3.

There are 3 different characters a, b and c.

*/

function solution(s) {
    let diff = 1
    let order = s.split('').sort().join('')
    
    for(let i = 0;i<order.length-1;i++){
      if(order[i]!=order[i+1]) diff++
    }
  return diff;
}