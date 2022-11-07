function wordsTracker(input) {
    let arrayOfWords = input.shift().split(" ");
    let wordAssoc = {};
    for (let word of arrayOfWords) {
        wordAssoc[word] = 0;
    }
    for (let word of input) {
        if (wordAssoc.hasOwnProperty(word)) {
            wordAssoc[word]++;
        }


    }
    let sortedWord = Object.entries(wordAssoc).sort((a, b) => b[1] - a[1]);

    for (let key of sortedWord) {
        console.log(`${key[0]} - ${key[1]}`);
    }

}
