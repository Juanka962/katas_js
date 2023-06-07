/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. 
The complete move therefore looks like the letter L. 
Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

*/

function solution(cell) {
    var r = [2, 3, 4, 6, 8];
    var c1 = Math.min(cell.charCodeAt(0) - 97, 104 - cell.charCodeAt(0));
    var c2 = Math.min(cell.charCodeAt(1) - 49, 56 - cell.charCodeAt(1));
    var d1 = Math.min(c1, 2);
    var d2 = Math.min(c2, 2);
    return r[d1 + d2];
}