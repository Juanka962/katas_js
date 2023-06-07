/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

    For cell1 = "A1" and cell2 = "C3", the output should be
    solution(cell1, cell2) = true.

*/

function solution(cell1, cell2) {

    let letters = ['A','B','C','D','E','F','G','H']
    
    cell1 = (letters.indexOf(cell1[0]) + 1) % 2 == cell1[1] % 2 ? 'dark' : 'light';
    cell2 = (letters.indexOf(cell2[0]) + 1) % 2 == cell2[1] % 2 ? 'dark' : 'light';
    
    return cell1 == cell2
}