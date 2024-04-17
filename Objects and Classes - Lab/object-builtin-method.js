let info = {
    firstName: 'Pesho',
    lastName: 'Ivanov',
    age: 28,
    eyeColor: 'brown',
    isMale: true,
};

let objectProperties = Object.keys(info);
let objectValues = Object.values(info);
let objectEntries = Object.entries(info); // return array of arrays
console.log(objectEntries);