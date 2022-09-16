function vacation(groupOfPeople, typeOfPeople, dayOfTheWeek) {
    let totalPrice = 0;
    if (typeOfPeople === "Students") {
        if (dayOfTheWeek === "Friday") {
            totalPrice = groupOfPeople * 8.45;
        } else if (dayOfTheWeek === "Saturday") {
            totalPrice = groupOfPeople * 9.80;
        } else if (dayOfTheWeek === "Sunday") {
            totalPrice = groupOfPeople * 10.46;
        }
        if (groupOfPeople >= 30) {
            totalPrice *= 0.85;
        }
    } else if (typeOfPeople === "Business") {
        if (groupOfPeople >= 100) {
            groupOfPeople -= 10;
        }

        if (dayOfTheWeek === "Friday") {
            totalPrice = groupOfPeople * 10.90;
        } else if (dayOfTheWeek === "Saturday") {
            totalPrice = groupOfPeople * 15.60;
        } else if (dayOfTheWeek === "Sunday") {
            totalPrice = groupOfPeople * 16;
        }

    } else if (typeOfPeople === "Regular") {
        if (dayOfTheWeek === "Friday") {
            totalPrice = groupOfPeople * 15;
        } else if (dayOfTheWeek === "Saturday") {
            totalPrice = groupOfPeople * 20;
        } else if (dayOfTheWeek === "Sunday") {
            totalPrice = groupOfPeople * 22.50;
        }
        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            totalPrice *= 0.95;
        }

    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}