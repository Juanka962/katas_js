/*
You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. 
With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

Example

For deposit = 100, rate = 20, and threshold = 170, the output should be
solution(deposit, rate, threshold) = 3.

*/

function solution(deposit, rate, threshold) {
    let years = 0;
    while(deposit<threshold){
      deposit = deposit+(deposit*(rate/100));
      years++;
    }
    return years;
  }