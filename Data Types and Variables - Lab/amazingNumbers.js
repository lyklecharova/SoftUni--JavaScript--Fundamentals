function amazingNumbers(number) {
    let numToString = String(number);
    let result = 0;

    for (let i = 0; i < numToString.length; i++) {
        let num = Number(numToString[i]);
        result += num;
    }
    let resultString = String(result);
    let isAmazing = false;
    for (let i = 0; i < resultString.length; i++) {
        if (Number(resultString[i]) === 9) {
            isAmazing = true;
            break;
        }
    }
    let amazing = isAmazing ? "True" : "False";
    console.log(`${numToString} Amazing? ${amazing}`);
}
