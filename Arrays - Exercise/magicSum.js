function magicSum(arrayOfIntegers, unique) {
    let arrOfValidPairs = [];
    let validPair = '';

    for (let i = 0; i < arrayOfIntegers.length; i++) {
        for (let j = i + 1; j < arrayOfIntegers.length; j++) {
            if (arrayOfIntegers[i] + arrayOfIntegers[j] === unique) {
                validPair = `${arrayOfIntegers[i]} ${arrayOfIntegers[j]}`;
                arrOfValidPairs.push(validPair);
            }
        }

    }
    console.log(arrOfValidPairs.join('\n'));
}
