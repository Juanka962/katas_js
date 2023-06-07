/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].
*/

function solution(inputArray) {
    let maxString = inputArray[0].length
    let valuesFilter = []
    for(let i=0;i<inputArray.length;i++){
      if(maxString<inputArray[i].length){
        maxString = inputArray[i].length;
      }
    }
    inputArray.map(e=> {if(e.length==maxString) valuesFilter.push(e)})
    return valuesFilter;
  }
  
  solution(["aba", "aaa", "ad", "vcd", "aba"]);