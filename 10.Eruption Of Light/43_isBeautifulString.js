/*
A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter 
in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc.
Note that letter a has no previous letter.

Given a string, check whether it is beautiful.

Example

    For inputString = "bbbaacdafe", the output should be solution(inputString) = true.

    This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that 
    appear more frequently than the previous letter, this string qualifies as beautiful.

*/


function solution(inputString) {
   
    let arr = new Array(26).fill(0);
    
    for(let i=0; i < inputString.length; i++){
        arr[inputString[i].charCodeAt() - 97]++;
    }
    
    for(let i=0; i < arr.length; i++){
        if(arr[i] > arr[i-1]){ 
            return false; 
        }
    }
    return true;
    
    
}