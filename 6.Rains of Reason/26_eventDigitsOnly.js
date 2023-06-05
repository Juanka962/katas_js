/*
Check if all digits of the given integer are even.

Example

    For n = 248622, the output should be
    solution(n) = true;
    For n = 642386, the output should be
    solution(n) = false.

*/

function solution(n) {
    let nStr = n.toString().split('')
    
    for(let i=0;i<nStr.length;i++){
      if(Number(nStr[i])%2!=0) return false
    }
  return true
}

solution(248622)