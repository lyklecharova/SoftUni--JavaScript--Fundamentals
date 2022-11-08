function lastKNumbersSequance(n, k) {
    let sequence = [1];

    for (let i = 0; i < n - 1; i++) {
        let elementK = sequence.slice(-k);
        let sum = 0;
        for (let el of elementK) {
            sum += el;

        }
        sequence.push(sum);
    }
    console.log(sequence.join(' '));


}
lastKNumbersSequance(6, 3);