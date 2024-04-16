//! Function declaration
function solve() {
    console.log('Function declaration');
}

//! Function expression
let func = function () {
    console.log('Function expression');
}


//! Function call inside a function
function main() {
    solve();
    func();
}

//! Function invokation
solve();
func();
main(); // undefined

//! Functions always return value
let returnedValue = solve();
console.log(returnedValue); // undefined

//! Function expression with parameters
const sum = function (a, b) {
    console.log(a + b);
}
sum(1, 2);

