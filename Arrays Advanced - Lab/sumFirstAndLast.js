function sumFirstAndLast(array) {
    let firstEl = array.shift();
    let lastEl = array.pop();

    console.log(Number(firstEl) + Number(lastEl));

}
sumFirstAndLast(['20', '30', '40'])