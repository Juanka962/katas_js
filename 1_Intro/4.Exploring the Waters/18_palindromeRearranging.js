/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/

const solution = (a) => {
    let appearances = {};
    let countOdd = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (!appearances[a[i]]) {
            appearances[a[i]] = 0;
        }
        appearances[a[i]]++;
    }
    
    for (let key in appearances) {
        if (appearances[key] % 2 === 1) {
            countOdd ++;
        }
        if (countOdd > 1) {
            return false;
        }
    }
    
    return true;
}