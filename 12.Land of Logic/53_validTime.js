/*
Check if the given string is a correct time representation of the 24-hour clock.

Example

    For time = "13:58", the output should be
    solution(time) = true;
    For time = "25:51", the output should be
    solution(time) = false;
    For time = "02:76", the output should be
    solution(time) = false.


*/

function solution(time) {
    let filtro = time.split(':')
     if(filtro[0]>=24) return false
     if(filtro[1]>=60) return false;
     return true;
   }