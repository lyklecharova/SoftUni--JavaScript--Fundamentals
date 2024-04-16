let cars = ['BWM', 'Mercedess', 'Toyota'];
console.log(cars);

//! push() - add to the end of the array
cars.push('Audi');
console.log(cars);

// Add multiple elements at the end of the array
cars.push('Trabant', 'Lada');
console.log(cars);

//! pop() - remove last element  of the array
cars.pop();
console.log(cars);

// remove and get the last element from the array
let lastCar = cars.pop();
console.log(cars);
console.log('removed car', lastCar);

// get new length after push
let currentCarCount = cars.push('Honda');
console.log(cars);
console.log('Current car count =  ', currentCarCount);

// Remove last element without pop()
cars.length = cars.length - 1;
console.log(cars);