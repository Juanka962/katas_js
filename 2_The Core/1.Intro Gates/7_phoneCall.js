/*
Some phone usage rate may be described as follows:

    first minute of a call costs min1 cents,
    each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
    each minute after 10th costs min11 cents.

You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

Example

For min1 = 3, min2_10 = 1, min11 = 2, and s = 20, the output should be
solution(min1, min2_10, min11, s) = 14.

*/

function solution(min1, min2_10, min11, s) {
    let result = 0;
    let i = 0;
  
    while (result <= s) {
      i++;
      if (i == 1) result += min1;
      if (i >= 2 && i <= 10) result += min2_10;
      if (i > 10) result += min11;
    }
  
    return --i;
  }