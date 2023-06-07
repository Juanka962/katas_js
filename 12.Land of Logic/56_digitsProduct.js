/*
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

    For product = 12, the output should be
    solution(product) = 26;
    For product = 19, the output should be
    solution(product) = -1.


*/

function solution(product) {
    if (product == 0) {return 10}
    for (let i = 0; i < 3600; i++) {
        let a = 1
        for (let j of i.toString()) {a *= Number(j)}
        if (a == product) {return i}
    }
    return -1
  }