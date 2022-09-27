function equalArrays(firstArray, secondArray) {
    let identical = true;
    let arrayDifferent = 0;

    for (let i = 0; i < firstArray.length; i++) {
        let firstElement = firstArray[i];
        let secondElement = secondArray[i];

        if (firstElement !== secondElement) {
            identical = false;
            arrayDifferent = i;
            break;
        }
    }

    if (identical) {
        let sum = 0;
        for (let i = 0; i < firstArray.length; i++) {
            sum += Number(firstArray[i]);
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${arrayDifferent} index`);
    }
}
