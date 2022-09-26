function sumDigits(number) {
    let num = number.toString();
    let sumDigits = 0;

    for (let i = 0; i < num.length; i++) {
        let currentDigits = Number(num[i]);
        sumDigits += currentDigits;
    }
    console.log(sumDigits);
}