/*
Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. 
In other words, find the element x in a, which minimizes the following sum:

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)

(where abs denotes the absolute value)

If there are several possible answers, output the smallest one.

Example

    For a = [2, 4, 7], the output should be solution(a) = 4.

*/

function solution(a) {
    let pos = Math.floor((a.length-1)/2)
    return a[pos]
  }