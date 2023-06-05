/*
Function search the numbers can give the sum of number
Example --> [3,4,9,1],10
Example --> [2,1,10,4],5

*/

function sumToWish(arr,num){
    for(let i=0;i<arr.length;i++){
      
      let num1 = arr[i];
      let num2 = num-arr[i];
      
      if(arr.includes(num2) && (num2)!= num1) {
        let result = [num1,num2];
        return result;
      }
    }
    
  }

  sumToWish([3,7,8,2],10)