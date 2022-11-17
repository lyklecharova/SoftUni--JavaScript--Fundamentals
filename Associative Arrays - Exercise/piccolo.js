function picolo(input) {
    let parkingLot = {};
    for (let el of input) {
        let [direction, carNumber] = el.split(", ");
        if (direction === "IN") {
            if (!parkingLot.hasOwnProperty(carNumber)) {
                parkingLot[carNumber] = "IN";

            }
        }
        if (direction === "OUT") {
            if (parkingLot.hasOwnProperty(carNumber)) {
                delete parkingLot[carNumber];

            }
        }
    }
    if (Object.keys(parkingLot).length === 0) {
        return console.log("Parking Lot is Empty");
    }

    let sortedCar = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b));
    for (let car of sortedCar) {
        console.log(car);
    }
}
