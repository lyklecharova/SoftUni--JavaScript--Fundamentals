function arrayRotation(array, numberOfRotations) {
    for (let i = 0; i < numberOfRotations; i++) {
        let number = array.shift();
        array.push(number);
    }
    console.log(array.join(' '));
}

