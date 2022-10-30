function makeADictionary(input) {
    let dictionaryObj = {};
    for (let element of input) {
        let oneObj = JSON.parse(element);
        dictionaryObj = Object.assign(dictionaryObj, oneObj);
    }
    let sorted = Object.keys(dictionaryObj);
    sorted.sort((a, b) => a.localeCompare(b));
    for (let term of sorted) {
        let newDefinition = dictionaryObj[term];
        console.log(`Term: ${term} => Definition: ${newDefinition}`)
    }

}
