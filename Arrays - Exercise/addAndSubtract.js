function addAndSubtract(number) {
    let newlyModifiedArray = 0;
    let originalArray = 0;
    let modifiedArray = number.length;

    for (let i = 0; i < modifiedArray; i++) {
        newlyModifiedArray += number[i];
        if (number[i] % 2 === 0) {
            number[i] += i;
        } else {
            number[i] -= i;
        }
        originalArray += number[i];
    }
    console.log(number);
    console.log(newlyModifiedArray);
    console.log(originalArray);
}
