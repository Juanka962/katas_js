function converterRomanNumber(romanos){
    let tabla = {
      'I': 1,
      'IV':4,
      'V': 5,
      'IX':9,
      'X': 10,
      'XL':40,
      'L': 50,
      'XC':90,
      'C': 100,
      'CD':400,
      'D': 500,
      'CM':900,
      'M': 1000
    }
    
    let resultado = 0;
    for(let i = 0; i < romanos.length; i++){
      console.log(romanos[i],tabla[romanos[i]]);
      if(i===romanos.length-1 || tabla[romanos[i+1]]<=tabla[romanos[i]]){
        resultado +=tabla[romanos[i]]
      }
      else{
        resultado-= tabla[romanos[i]]
      }
    }
    return resultado;
   }
  converterRomanNumber('XIV')