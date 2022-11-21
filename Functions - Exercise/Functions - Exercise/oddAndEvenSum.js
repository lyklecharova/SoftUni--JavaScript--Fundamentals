function oddAndEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;

    let sumNubers = number.toString();

    for (let num of sumNubers) {
        let currentN = Number(num);
        if (currentN % 2 === 0) {
            evenSum += currentN;
        } else {
            oddSum += currentN;
        }

    }
    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
