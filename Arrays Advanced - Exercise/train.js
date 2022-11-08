function train(arrayOfString) {
    let numbers = arrayOfString.shift()
        .split(" ")
        .map((x) => Number(x));


    let max = Number(arrayOfString.shift());


    for (let i = 0; i < arrayOfString.length; i++) {
        let arrNew = arrayOfString[i].split(" ");
        let command = arrNew[0];
        let firstValue = arrNew[1];


        if (arrNew.length === 2 && command === "Add") {
            numbers.push(firstValue);
        } else {
            let passengers = Number(arrNew[0]);
            for (let j = 0; j < numbers.length; j++) {
                if (passengers + numbers[j] <= max) {
                    numbers[j] += passengers;
                    break;
                }

            }
        }
    }
    console.log(numbers.join(" "));
}
