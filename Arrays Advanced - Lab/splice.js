//! splice mutates the original array
let cars = ['BWM', 'Mercedess', 'Toyota'];

// Remove single elements in the middle
let removedCars = cars.splice(2, 1);
console.log(cars);
console.log(removedCars);

// Remove two elements in the middle
cars = ['BWM', 'Mercedess', 'Toyota'];
let middleCars = cars.splice(1, 2);
console.log(cars);
console.log(middleCars);

// Add elements in the middle
cars = ['BWM', 'Mercedess', 'Toyota'];
cars.splice(1, 0, 'Lada', 'Trabant');
console.log(cars);

// Combined add and remove
cars.splice(1, 2, 'Honda');
console.log(cars);