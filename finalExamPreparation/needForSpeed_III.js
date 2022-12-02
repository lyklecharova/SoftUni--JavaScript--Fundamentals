function needForSpeedIII(input) {
    let numberOfCars = Number(input.shift());
    //console.log(numberOfCars); // 3
    let carObj = {};

    for (let i = 0; i < numberOfCars; i++) {
        let line = input.shift().split('|');
        let nameCar = line[0];
        let mileage = Number(line[1]);
        let fuel = Number(line[2]);


        carObj[nameCar] = { mileage, fuel };
    }

    let command = input.shift().split(' : ');
    while (command[0] !== 'Stop') {
        if (command[0] === 'Drive') {
            if (carObj[command[1]].fuel >= Number(command[3])) {
                carObj[command[1]].fuel -= Number(command[3]);
                carObj[command[1]].mileage += Number(command[2]);
                console.log(`${command[1]} driven for ${command[2]} kilometers. ${command[3]} liters of fuel consumed.`);
            } else {
                console.log('Not enough fuel to make that ride');
            }
            if (carObj[command[1]].mileage > 100000) {
                delete carObj[command[1]];
                console.log(`Time to sell the ${command[1]}!`);
            }
        }

        if (command[0] === 'Refuel') {
            if ((carObj[command[1]].fuel + Number(command[2])) >= 75) {
                console.log(`${command[1]} refueled with ${(75 - carObj[command[1]].fuel)} liters`);

                carObj[command[1]].fuel = 75;
            } else {
                carObj[command[1]].fuel += Number(command[2]);
                console.log(`${command[1]} refueled with ${Number(command[2])} liters`);
            }
        }

        if (command[0] === 'Revert') {
            if (carObj[command[1]].mileage - Number(command[2]) > 10000) {
                console.log(`${command[1]} mileage decreased by ${Number(command[2])} kilometers`);
                carObj[command[1]].mileage -= Number(command[2]);
            } else {
                carObj[command[1]].mileage = 10000;
            }
        }
        command = input.shift().split(' : ');
    }
    for (let car in carObj) {
        console.log(`${car} -> Mileage: ${carObj[car].mileage} kms, Fuel in the tank: ${carObj[car].fuel} lt.`);
    }

}
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])

//Not enough fuel to make that ride
// Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
// Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
// Time to sell the Aston Martin Valkryie!
// Lamborghini Veneno refueled with 1 liters
// Bugatti Veyron mileage decreased by 2000 kilometers
// Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
// Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.
// Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.




