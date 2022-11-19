function repeatString(str, countN) {
    let result = '';
    for (let i = 0; i < countN; i++) {
        result += str;
    }
    return result;
}
console.log(repeatString("abc", 3))