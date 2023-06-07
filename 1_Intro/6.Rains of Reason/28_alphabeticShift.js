/*
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, 
replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be solution(inputString) = "dsbaz".

*/

function solution(inputString) {
    let cambio = ''
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i=0;i<inputString.length;i++){
      let index = abc.indexOf(inputString[i]);
      (abc[index] == abc[abc.length-1])? cambio+=abc[0] : cambio+=abc[index+1]
    }
    return cambio
  }

  solution("crazy")