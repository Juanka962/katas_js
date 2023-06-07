/*
Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. 
Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, 
the plant decreases in height every night, by an amount represented by downSpeed.

Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, 
your task is to find how many days it'll take for the plant to reach this height.

Example

For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
solution(upSpeed, downSpeed, desiredHeight) = 10.

*/


function solution(upSpeed, downSpeed, desiredHeight) {
    let days =  1;
    let height = 0;
    while(height<desiredHeight){
        height+=upSpeed
        if(height>=desiredHeight) return days
        height-=downSpeed
        days++
    }
    return days
}

solution(10,9,4)
