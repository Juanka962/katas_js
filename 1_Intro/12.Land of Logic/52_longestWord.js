/*
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
solution(text) = "steady".
*/


function solution(text) {
    let filtro = text.replace(/[^a-zA-Z0-9 ]/g, ' ').split(' ');
  let max = filtro[0]
  filtro.map(e=>{
    if(e.length>max.length) max = e;
  })
  return max;
}