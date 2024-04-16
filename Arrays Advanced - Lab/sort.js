let numbers = [2, 4, 1, 6, 2];
let cars = ['BWM', 'Mercedess', 'Toyota', 'Audi'];

//! Using default sort
let sortedNumbers = numbers.sort();
let sortedCars = cars.sort();
console.log(sortedNumbers);
console.log(sortedCars);

// default sort limitation
numbers = [2, 4, 1, 6, 2, 100];
cars = ['BWM', 'Mercedess', 'Toyota', 'VW', 'Audi'];

numbers.sort();
cars.sort();

console.log(numbers);
console.log(cars);

// sort numbers
numbers = [2, 4, 1, 6, 2, 100];
// numbers.sort((a, b) => {
//     if (a < b) { // a - b = negative
//         return -1;
//     } else if (a > b) { // a - b = postive
//         return 1;
//     } else { // a - b = zero
//         return 0;
//     }
// });

numbers.sort((a, b) => a - b); // b - a for descending order
console.log(numbers);

// sort strings
cars = ['BWM', 'Mercedess', 'Toyota', 'VW', 'Audi'];
cars.sort((a, b) => a.localeCompare(b));
console.log(cars);