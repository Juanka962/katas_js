/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.
*/

function solution(picture) {
    picture.map((e,index)=>{
      picture[index]='*'+e+'*';
    })
  picture.unshift('*'.repeat(picture[0].length))
  picture.push('*'.repeat(picture[0].length))
  
  return picture
}

solution(["abc",
          "ded"])