/*
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

    For inputString = "(bar)",
    the output should be -- > solution(inputString) = "rab";
    For inputString = "foo(bar)baz", 
    the output should be -- > solution(inputString) = "foorabbaz"

*/

function solution(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}

solution("(asda)(bar)ba")