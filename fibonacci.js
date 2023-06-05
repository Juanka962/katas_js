/*
A simple technical test 
Fibonacci --> The sum of its 2 previous numbers

Example --> Fibonacci(5) should be [ 0, 1, 1, 2, 3, 5 ]
            Fibonacci(10) should be [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
            Fibonnaci(20) should be [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765 ]
*/

function fibonacci(num){
    let acum = [0,1]
    let i=2
    while(i<=num){
      acum.push(acum[i-1]+acum[i-2])
      i++;
    }
    return acum;
  }
  
  fibonacci(10)