/*
You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

    The first element of the array occupies the first 8 bits of M;
    The second element occupies next 8 bits, and so on.

Return the obtained integer M.

Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. 
For further clarification see the following example.

Example

For a = [24, 85, 0], the output should be
solution(a) = 21784.

*/

function solution(n) {
    let reverse = n.reverse();
    let binarys ='';
    reverse.map(e=>{
      let bin = e.toString(2)
      while(bin.length<8){
        bin ='0'+bin;
      }
       binarys+=bin;
    })
    return parseInt(binarys,2)
}