/*
Given the positions of a white bishop and a black pawn on the standard chess board, 
determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. 
Check out the example below to see how it can move:

Example:
For bishop = "a1" and pawn = "c3", the output should be
solution(bishop, pawn) = true

*/


function solution(bishop, pawn) {
    let [a, b] = bishop;
    let [c, d] = pawn;
    
    let diff1 = a.charCodeAt() - c.charCodeAt();
    let diff2 = d - b;
    return Math.abs(diff1) == Math.abs(diff2);
}