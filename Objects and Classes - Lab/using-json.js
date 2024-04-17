let info = {
    firstName: 'Pesho',
    lastName: 'Ivanov',
    age: 28,
    eyeColor: 'brown',
    isMale: true,
};

let infoJON = JSON.stringify(info, null, 2);
console.log(infoJON);

let converetedJSON = JSON.parse(infoJON);
console.log(converetedJSON);