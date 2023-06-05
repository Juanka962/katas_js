/*
Given the string, check if it is a palindrome.

Example

    For inputString = "aabaa", the output should be
    solution(inputString) = true;
    For inputString = "abac", the output should be
    solution(inputString) = false;
    For inputString = "a", the output should be
    solution(inputString) = true.


*/
function solution(inputString) {
    let cadenaInversa = ''
    let palindromo = false;
    for(var i = inputString.length - 1; i >= 0; i--){
        cadenaInversa+=inputString[i]
    }
    (inputString == cadenaInversa) ?  palindromo = true :  palindromo = false
    return palindromo
}

solution('aabaa')