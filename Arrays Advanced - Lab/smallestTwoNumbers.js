function smallestTwoNumbers(arr) {
    let smallest = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (smallest > Math.min(smallest, arr[i])) {
            smallest = Math.min(smallest, arr[i]);
        }
    }
    let small = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (Math.min(small, arr[i]) < small && smallest < Math.min(small, arr[i])) {
            small = Math.min(small, arr[i]);
        }
    }
    console.log(`${smallest} ${small}`);

}
smallestTwoNumbers([30, 15, 50, 5])