function commonElements(firstArray, secondArray) {
    for (let element of firstArray) {
        if (secondArray.includes(element)) {
            console.log(element);
        }
    }
}
