// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

let number= [1, 2, 3];

// let value=[]; fokiri system
// for(let x of number){
//    value.push(x);
// }

// let value=Array.from(number); alternate

let value=[].concat(number)
value[0]=99;
console.log(number);
console.log(value);



