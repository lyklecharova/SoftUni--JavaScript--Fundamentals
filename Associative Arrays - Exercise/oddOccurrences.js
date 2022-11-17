function oddOccurrences(input) {
    let elementsOfASentence = {};
    let words = input.split(' ').map(w => w.toLowerCase());

    for (let word of words) {
        if (elementsOfASentence[word] === undefined) {
            elementsOfASentence[word] = 1;
        } else {
            elementsOfASentence[word]++;
        }
    }
    let result = " ";
    for (let word of words) {
        if (elementsOfASentence[word] % 2 === 1) {
            result += `${word} `;
            delete elementsOfASentence[word];
        }
    }
    console.log(result);
}
