function reverseArr(count, numbers) {
    // create empty array
    let reversedNumbers = [];

    // take count elements from array
    // reverse the elements
    for (let i = 0; i < count; i++) {
        // result[count - 1 - i] = numbers[i];
        reversedNumbers[i] = numbers[count - 1 - i];
    }
    //* print for winners :)
    let result = '';
    for (let i = 0; i < reversedNumbers.length; i++) {
        result += reversedNumbers[i];

        if (i < reversedNumbers.length - 1) {
            result += ' ';
        }
    }
    console.log(result);
}
reverseArr(3, [10, 20, 30, 40, 50]);


//! Alternative
// function reverseArr(count, numbers) {
//     let result = [];
//     for (let i = count - 1; i >= 0; i--) {
//         result.push(numbers[i]);
//     }

//     console.log(result.join(' '));
// }
// reverseArr(3, [10, 20, 30, 40, 50]);