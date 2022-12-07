function palindromeIntegers(arrayOfPositiveIntegers) {
    for (let element of arrayOfPositiveIntegers) {
        let currentElement = String(element);
        let reverseElement = String(element).split('').reverse().join('');

        if (currentElement === reverseElement) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

