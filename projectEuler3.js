function getFactors(number){
  if (isNaN(number)){return}
  for (var i=2; i<Math.ceil(number/2);i++){
    if (number%i===0){
      var fact1=getFactors(i);
      var fact2=getFactors(number/i);
      if (fact1>fact2){
        return fact1
      } else {
        return fact2
      }
    }
  }
  return number
}
var GPF=getFactors(600851475143);
console.log(GPF);