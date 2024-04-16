let numbers = [2, 4, 1, 6, 10];
console.log(numbers);

let doubleNumbers = numbers.map(x => x * 2);
console.log(doubleNumbers);

// Solution without map
function mapDouble(arr) {
    let transformedArr = [];

    for (const el of arr) {
        transformedArr.push(el * 2);
    }
    console.log(transformedArr);
}

// implement  map - advanced
function map(arr, callback) {
    let transformedArr = [];

    for (const el of arr) {
        transformedArr.push(callback(el));
    }
    return transformedArr;
}
console.log(map(numbers, x => x * 2));