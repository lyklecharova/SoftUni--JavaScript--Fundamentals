function ages(age) {
    if (age >= 0 && age <= 2) {
        console.log("baby");
    } else if (age > 2 && age <= 13) {
        console.log("child");
    } else if (age > 13 && age <= 19) {
        console.log("teenager");
    } else if (age > 19 && age <= 65) {
        console.log("adult");
    } else if (age >= 65) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}
