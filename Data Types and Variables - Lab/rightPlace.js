function rightPlace(firstString, char, missingChar) {
    let stringChar = '';

    for (let i = 0; i < firstString.length; i++) {
        let currentChar = firstString[i];
        if (currentChar === '_') {
            stringChar += char;
        } else {
            stringChar += currentChar;
        }
    }
    if (stringChar === missingChar) {
        console.log("Matched");
    } else {
        console.log("Not Matched")
    }
}
