//works for all cases
// sum(1)(2)(1,2,3,4,5,6)(3,4,5,6,6...n)..n()
//sum(1,2,3)(3,5,6)...n()

function sum(...args){

  let total = args.reduce((a,b) => a+b,0);

  return function(...args){
    let x= args.reduce((a,b) => a+b,0);
    if(args.length != 0) return sum(total, x);
    else return total;
  }
}


console.log(sum(1)(2)(3)(4)(5)());

console.log(sum(1,1,1)(2,2,2)(3)(4,4,4,4)());