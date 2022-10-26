function nonDecreasingSubset(arr) {
    let max = arr[0];
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));
}
// function nonDecreasingSubset(array) {
//     let biggestNumber = array[0];
//     let result = [biggestNumber];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] >= biggestNumber) {
//             result.push(array[i]);
//             biggestNumber = array[i];
//         }
//     }
 
//     console.log(result.join(" "));
// }