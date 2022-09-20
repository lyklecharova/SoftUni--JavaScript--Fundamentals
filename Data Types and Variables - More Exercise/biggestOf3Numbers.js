function biggestOf3Numbers(number1, number2, number3) {

    let result = [number1, number2, number3].sort((a, b) => a - b);
    console.log(result[2])
}
