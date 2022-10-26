function rotateArray(array) {
    let lastElement = Number(array.pop()); // last element
    let arrNumber = 0;

    for (let i = 0; i < lastElement; i++) {
        arrNumber = array.pop();
        array.unshift(arrNumber);
    }
    console.log(array.join(' '));
}
