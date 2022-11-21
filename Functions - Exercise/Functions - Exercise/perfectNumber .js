function perfectNumber(number) {
    let sumOfPositiveDivisors = 1;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            sumOfPositiveDivisors += i;
        }
    }
    if (sumOfPositiveDivisors === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.")
    }
}
