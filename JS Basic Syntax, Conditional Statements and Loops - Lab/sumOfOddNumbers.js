function sumOfOddNumbers(number) {
    let sumOfNumber = 0;
    let currentNumber = 1;

    for (num = 1; num <= number; num++) {
        console.log(currentNumber);
        sumOfNumber += currentNumber;
        currentNumber += 2;
    }
    console.log(`Sum: ${sumOfNumber}`)
}
