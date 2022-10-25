function maxSequenceOfEqualElements(array) {
    let maxSequence = [];

    for (let i = 0; i < array.length; i++) {
        let arrSequence = [];

        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                arrSequence.push(array[i]);
            } else {
                break;
            }
        }
        if (arrSequence.length > maxSequence.length) {
            maxSequence = arrSequence;
        }
    }
    console.log(maxSequence.join(' '));

}
