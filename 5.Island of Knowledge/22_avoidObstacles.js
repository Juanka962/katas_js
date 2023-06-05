/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. 
You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
solution(inputArray) = 4.

*/

function solution(inputArray) {
    var obst = inputArray.sort();
    var dist = 1;
    for(i=0; i<obst[obst.length-1]+1; i = i+dist){
        if(obst.includes(i+dist)){
            dist++;
            i = 0-dist;
        }
    }
    return dist;
}