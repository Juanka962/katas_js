/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]

*/


function solution(alturas){
    let copiasPositivas =[];
    alturas.forEach(e=>{
      if (Math.sign(e)>0) copiasPositivas.push(e)
    })
    copiasPositivas.sort((a,b)=> a-b)
    for(let i = 0;i<alturas.length;i++){
      if(alturas[i]>0){
      let val = copiasPositivas.shift();        
        alturas[i] = val;
      }
    }
  return alturas
}

solution([-1, 150, 190, 170, -1, -1, 160, 180])