//! Function expression
// let double = function (a){
//     return a *2;
// }

//! Arrow function with body
// let double = (a) =>{
//     return a *2;
// }

//! Arrow function  without body
// let double = (a) => a * 2;

//! Arrow function without body with single parameter
let double = a => a * 2;

let doubledNumber = double(10);
console.log(doubledNumber);