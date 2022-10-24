function equalSums(number) {
    let condition = 'no';

    for (let i = 0; i < number.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let left = 0; left < i; left++) {
            leftSum += number[left];
        }

        for (let right = i + 1; right < number.length; right++) {
            rightSum += number[right];
        }
        if (leftSum === rightSum) {
            condition = i;
        }
    }
    console.log(condition)
}
