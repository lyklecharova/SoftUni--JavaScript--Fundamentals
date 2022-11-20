function loadingBar(number) {
    let complete = '%'.repeat(number / 10);
    let points = '.'.repeat(10 - complete.length);

    if (points.length === 0) {
        console.log("100% Complete!");
        console.log(`[${complete}]`);
    } else {
        console.log(`${number}% [${complete}${points}]`);
        console.log("Still loading...");
    }
}
