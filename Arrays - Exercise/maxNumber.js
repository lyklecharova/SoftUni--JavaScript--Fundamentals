function maxNumber(number) {
    let newNumber = [];

    for (let i = 0; i < number.length; i++) {
        let num = number[i];
        let isBigger = true;

        for (let j = i + 1; j < number.length; j++) {
            let num2 = number[j];

            if (num <= num2) {
                isBigger = false;
            }
        }
        if (isBigger) {
            newNumber.push(num);
        }
    }
    console.log(newNumber.join(' '));
}
