/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 
Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger 
than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out 
the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

*/

function makeArrayConsecutive(status){
    const status_sort = status.sort((a,b) => {return a-b});
    let status_pending =[];
   
    for(let i =status_sort[0];i<status_sort[status_sort.length-1];i++){
      if(!status_sort.includes(i)){
        status_pending.push(i);
      }
    }
  return status_pending.length;
}

makeArrayConsecutive([6,20,3,7,8,12])