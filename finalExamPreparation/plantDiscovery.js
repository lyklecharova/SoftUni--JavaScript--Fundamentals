function plantDiscovery(input) {
    let number = Number(input.shift());
    //console.log(number); //3
    let plantObj = {};

    for (let i = 0; i < number; i++) {
        let line = input.shift();
        let [plant, rarity] = line.split('<->');
        //console.log(line);
        // [ 'Arnoldii', '4' ]
        // [ 'Woodii', '7' ]
        // [ 'Welwitschia', '2' ]
        rarity = Number(rarity);

        if (plantObj.hasOwnProperty(plant)) {
            plantObj[plant].rarity = rarity;
        } else {
            plantObj[plant] = { rarity, rating: [] };
        }
    }
    let line = input.shift();
    // console.log(command);
    // [ 'Rate', 'Woodii - 10' ]
    while (line !== 'Exhibition') {
        let [command, ...rest] = line.split(': ');
        let [plant, data] = rest[0].split(' - ');

        if (plantObj.hasOwnProperty(plant) === false) {
            console.log('error');
        } else {
            if (command === 'Rate') {
                if (plantObj.hasOwnProperty(plant)) {
                    plantObj[plant].rating.push(Number(data));
                }
            }
            if (command === 'Update') {
                plantObj[plant].rarity = Number(data);
            }
            if (command === 'Reset') {
                plantObj[plant].rating = ['0'];
            }

        }
        line = input.shift();
    }
    console.log('Plants for the exhibition:');

    for (let plant in plantObj) {
        let plantAverage = 0;
        let len = plantObj[plant].rating.length;
        for (let i = 0; i < len; i++) {
            plantAverage += Number(plantObj[plant].rating[i]);
        }
        plantAverage /= len;
        console.log(`- ${plant}; Rarity: ${plantObj[plant].rarity}; Rating: ${(plantAverage).toFixed(2)}`);
    }
}
// plantDiscovery((["3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"]))

//Plants for the exhibition:
// - Arnoldii; Rarity: 4; Rating: 0.00
// - Woodii; Rarity: 5; Rating: 7.50
// - Welwitschia; Rarity: 2; Rating: 7.00


plantDiscovery((["3",
    "Candelabra<->10",
    "Oahu<->10",
    "Oahu<->8",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]))

// Plants for the exhibition:
// - Candelabra; Rarity: 10; Rating: 6.00
// - Oahu; Rarity: 10; Rating: 7.00