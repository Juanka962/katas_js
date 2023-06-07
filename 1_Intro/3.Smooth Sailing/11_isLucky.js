/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

    For n = 1230, the output should be
    solution(n) = true;
    For n = 239017, the output should be
    solution(n) = false.

*/

function solution(n){
    let toCad = n.toString();
    let mitad = toCad.length/2;
    
    let p = toCad.slice(0,mitad);
    let p2 = toCad.slice(mitad,toCad.length);
    let acum1=0;
    let acum2=0;
    
    for(let i = 0;i<p.length;i++){
      acum1+=Number(p[i]);
    }
    for(let i = 0;i<p2.length;i++){
      acum2+=Number(p2[i]);
    }
    return (acum1 == acum2)? true : false;
    
  
  }
  solution(1230);
  solution(239017);