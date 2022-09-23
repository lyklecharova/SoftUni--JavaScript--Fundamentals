function integerAndFloat(firtstNumber, secondNumber, thirdNumber) {
    let sum = firtstNumber + secondNumber + thirdNumber;
    if (Number.isInteger(sum)) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }

}
