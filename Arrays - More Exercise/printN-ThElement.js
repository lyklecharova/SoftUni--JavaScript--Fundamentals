function printNThElement(array) {
    let arrNumber = [];
    let nStep = Number(array[(array.length - 1)])

    for (let i = 0; i < array.length - 1; i += nStep) {
        arrNumber.push(array[i]);
    }
    console.log(arrNumber.join(' '));
}
