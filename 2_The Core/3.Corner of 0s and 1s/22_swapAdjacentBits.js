/*
You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) 
and swap bits in each pair. Then return the result as a decimal number.

Example

    For n = 13, the output should be
    solution(n) = 14.

    1310 = 11012 ~> {11}{01}2 ~> 11102 = 1410.


*/

function solution(n) {
    return (function(input) {
      let container =''
      let binary = n.toString(2)
      while(binary.length%8!=0){
          binary ='0'+binary;
      }
      for(let i = 0;i<binary.length;i+=2){
      container+=(binary[i+1]+binary[i])
      }
      return parseInt(container,2)
    })(n);
  }
  