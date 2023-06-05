/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
solution(inputString) = "123".

*/

function solution(inputString) {
    let prefix='';
    let comp = 0;
    for(let i=0;i<inputString.length;i++){
      if(!isNaN(inputString[i])&&inputString[i]!=' ' && comp ==0){
        prefix+=inputString[i]
      }
      else{
        comp++
      }
    }
    return prefix
  }
  
  solution("  3) always check for whitespaces")