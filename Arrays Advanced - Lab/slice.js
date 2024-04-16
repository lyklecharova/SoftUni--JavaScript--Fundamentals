let cars = ['BWM', 'Mercedess', 'Toyota'];

// Take first two cars
let firstCars = cars.slice(0,2);
console.log(cars); // orignal array has not modified
console.log(firstCars);

// Taka last two cars
let lastCars = cars.slice(2);
console.log(cars);
console.log(lastCars);

// Make a copy
let carsCopy = cars.slice();
console.log(carsCopy);

// Take last elements with negative index
let lastCar = cars.slice(-1);
console.log(lastCar);