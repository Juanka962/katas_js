/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

    For a = [1, 2, 3] and b = [1, 2, 3], the output should be
    solution(a, b) = true.

*/


function solution(a, b) {
   let sum = 0;
   for (i = 0; i < a.length; i++) {if (a[i] != b[i]) {sum++}}
   
   a.sort(); b.sort();
   return a.toString() == b.toString() && sum < 3

}

solution([1, 2, 3],[1,2,3])
 
