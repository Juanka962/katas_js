/*
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

    For n = 152, the output should be
    solution(n) = 52;
    For n = 1001, the output should be
    solution(n) = 101.


*/

function solution(n) {
    let str = n.toString()
    let max = Number(str.slice(0,str.length-1))
    
    for(let i = 0;i<str.length;i++){
      let sup = ''
      for(let x = 0;x<str.length;x++){
        if(x!=i){
          sup+=str[x]
        }
      }
      (Number(sup)>max) ? max = Number(sup) : max = max
    }
    return max
  }