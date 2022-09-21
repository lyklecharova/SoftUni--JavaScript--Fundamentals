function negativeOrPositiveNumbers(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            newArray.unshift(array[i]);
        } else {
            newArray.push(array[i]);
        }
    }
    console.log(newArray.join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])