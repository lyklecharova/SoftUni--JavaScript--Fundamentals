function sortAnArrayBy2Criteria(array) {
    let sortedArr = array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })
    sortedArr.forEach(element => {
        console.log(element);
    });
}
