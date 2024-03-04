let total =0;

function sum(num1){
  total += num1;

  return function(num2){
    if(num2) return sum(num2);
    else return total;
  }
}

console.log(sum(1)(2)(3)(4)(5)());