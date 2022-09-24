function calculator(number, operator, anotherNumber) {
    let result;
    if (operator === "+") {
        result = number + anotherNumber;
    } else if (operator === "-") {
        result = number - anotherNumber;
    } else if (operator === "/") {
        result = number / anotherNumber;
    } else {
        result = number * anotherNumber;
    }
    console.log(result.toFixed(2));
}
