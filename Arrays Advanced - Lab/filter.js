let numbers = [2, 4, 1, 9, 10, 3];

let evenNumbers = numbers.filter(num => num % 2 === 0);
let oddNumbers = numbers.filter(x => x % 2 !== 0);

console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);

// Take numbers on even positions
let evenPosionNumbers = numbers.filter((x, i) => i % 2 === 0);
console.log(evenPosionNumbers);

// liltering with strings
let names = ['Pesho', 'Gosho', 'Stamat', 'Ivo'];
let shortNames = names.filter(x => x.length <= 3);
console.log(shortNames);
