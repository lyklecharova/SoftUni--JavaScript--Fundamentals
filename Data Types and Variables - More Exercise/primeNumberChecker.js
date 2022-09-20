function primeNumberChecker(number) {
  if (number <= 1) {
    console.log(false);
  }
  else if (number === 2) {
    console.log(true);
  }
  if (number > 2) {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
      }
    }

    console.log(isPrime);
  }


}
