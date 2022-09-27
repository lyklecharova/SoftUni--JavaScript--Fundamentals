function condenseArrayToNumber(arrayOfNumbers) {
    let condensed = [];

    while (arrayOfNumbers.length > 1) {
        for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
            let currentArray = arrayOfNumbers[i];
            let nextArray = Number(arrayOfNumbers[i + 1]);
            condensed.push(currentArray + nextArray);
        }
        arrayOfNumbers = condensed;
        condensed = [];
    }
    console.log(arrayOfNumbers[0]);
}
