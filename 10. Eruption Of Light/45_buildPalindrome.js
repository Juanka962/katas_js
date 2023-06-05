/*
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
solution(st) = "abcdcba".
*/

function solution(st) {
    let rezStr;
    for (let i = 0; i < st.length; i++) {
        rezStr = st + st.substr(0, i).split('').reverse().join('');
        if (rezStr.split('').reverse().join('') == rezStr) {
            return rezStr;
            break;
        }
    } 
}