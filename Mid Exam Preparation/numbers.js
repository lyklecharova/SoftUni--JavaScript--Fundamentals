function numbers(array) {
    let num = array.split(' ').map(Number);
    let result = 0;

    for (let i = 0; i < num.length; i++) {
        result += num[i];
    }
    let finalResult = result / num.length;
    let arr = [];

    for (let i = 0; i < num.length; i++) {
        if (finalResult < num[i]) {
            arr.push(num[i]);
        }

    }
    if (arr.length <= 0) {
        console.log('No');
    }
    if (arr.length > 5) {
        let res = arr.sort((a, b) => b - a);
        let finalRes = res.splice(0, 5);
        console.log(finalRes.join(' '));
    } else if (arr.length <= 5 && arr.length !== 0) {
        let sorted = arr.sort((a, b) => b - a);
        console.log(sorted.join(' '));
    }
}
