var sum = 0;
for(var i =1; i < 1000; i++){
  if(i % 3 === 0 && i % 5 === 0){
    sum=sum +i;
  }
}

console.log(sum);


var numbers = prompt("input some numbers");
var result = [numbers[0]];
for(var i =0; i < numbers.length; i++){
   if((numbers[0] % 2 ===0) && numbers[1] % 2 === 0){
      result.push("-", numbers[i])
   }else{
     result.push(numbers[i])
   }
}
console.log(result.join(''));