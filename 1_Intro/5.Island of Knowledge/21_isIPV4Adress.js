/*
An IP address is a numerical label assigned to each device (e.g., computer, printer)
participating in a computer network that uses the Internet Protocol for communication. 
There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Examples:

    192.168.0.1 is a valid IPv4 address
    255.255.255.255 is a valid IPv4 address
    280.100.92.101 is not a valid IPv4 address because 280 is too large to be an 8-bit integer (the largest 8-bit integer is 255)
    255.100.81.160.172 is not a valid IPv4 address because it contains 5 integers instead of 4
    1..0.1 is not a valid IPv4 address because it's not properly formatted
    17.233.00.131 and 17.233.01.131 are not valid IPv4 addresses because they contain leading zeros

*/
function solution(inputString) {
    let convert = inputString.split('.')
     if(convert.length!=4){
       return false;
     }
    for(let i =0;i<convert.length;i++){
      if(isNaN(convert[i]) || convert[i]<0 || convert[i]>255 || convert[i] ==''|| (convert[i][0]=='0' && convert[i].length>1)){
        return false;
      }
    }
    return true;
  }