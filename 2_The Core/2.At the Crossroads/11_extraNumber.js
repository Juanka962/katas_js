/*
You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

Example

For a = 2, b = 7, and c = 2, the output should be
solution(a, b, c) = 7.
*/

function solution(a, b, c) {
    if(a == b) return c;
    if(b == c) return a;
    if(a == c) return b;
}
