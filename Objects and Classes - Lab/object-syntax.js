//! Defined object
let personalInformation = {
    firstName: 'Pesho',
    lastName: 'Ivanov',
    age: 28,
    eyeColor: 'brown',
    isMale: true,
};

console.log(`Hello my names is ${personalInformation.firstName} ${personalInformation.lastName}`);

if (personalInformation.isMale) {
    console.log('Go get a beer :)');
}

//! Dynamic assign property
personalInformation.weight = 80;
console.log(personalInformation);

//! delete property
delete personalInformation.weight;
console.log(personalInformation);

// Using bracket syntax
console.log(personalInformation['firstName']);
console.log(personalInformation.firstName); //! dot syntax

// access property by variable
let propertyName = 'firstName';
console.log(personalInformation[propertyName]);

// using different name for property name
let carInfo = {
    'car-model': 'BMW',
};
console.log(carInfo['car-model']);
// console.log(carInfo.car-model); //! throw error

