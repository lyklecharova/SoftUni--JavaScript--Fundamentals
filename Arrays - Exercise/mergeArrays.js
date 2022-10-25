function mergeArrays(firstArray, secondArray) {
    let arr = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            arr[i] = Number(firstArray[i]) + Number(secondArray[i]);
        } else {
            arr[i] = firstArray[i] + secondArray[i];
        }

    }
    console.log(arr.join(" - "))
}
