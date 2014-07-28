var evenSum=0;
var fibCount=1;
var prevFib=0;
while (fibCount<4000000){
  if (fibCount%2===0){
    evenSum+=fibCount;
  }
  var holder;  
  holder=fibCount;
  fibCount+=prevFib;
  prevFib=holder;
}
console.log(evenSum);