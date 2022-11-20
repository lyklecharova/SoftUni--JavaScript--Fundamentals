function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let ednChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    let char = [];

    for (let i = startChar + 1; i < ednChar; i++) {
        let currentChar = String.fromCharCode(i);
        char.push(currentChar);


    }
    console.log(char.join(' '))
}
