function firstLastKElements(arrayOfNumbers) {
    let kElements = arrayOfNumbers.shift();

    console.log(arrayOfNumbers.slice(0, kElements).join(' '));
    console.log(arrayOfNumbers.slice(-kElements).join(' '));


}
firstLastKElements([3,
    6, 7, 8, 9])