function printAndSum(firstNumber, secondNumber) {
    let result = '';
    let sumOfNumber = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        result += i + ' '; // '/n' -> new row in JS
        sumOfNumber += i;
    }
    console.log(result);
    console.log(`Sum: ${sumOfNumber}`);
}
