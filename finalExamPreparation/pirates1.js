function pirates(input) {
    let piratesObj = {};

    while (input[0] !== 'Sail') {
        let command = input.shift().split('||');
        let cities = command[0];
        let population = Number(command[1]);
        let gold = Number(command[2]);

        if (piratesObj.hasOwnProperty(cities)) {
            piratesObj[cities].population += population;
            piratesObj[cities].gold += gold;
        } else {
            piratesObj[cities] = {
                population,
                gold
            };
        }
    }

    while (input[0] !== 'End') {
        let command = input.shift().split('=>');
        let nextCommad = command[0];
        let currentTown = command[1];

        if (nextCommad === 'Plunder') {
            let targetPopulation = Number(command[2]);
            let targetGold = Number(command[3]);

            piratesObj[currentTown].population -= targetPopulation;
            piratesObj[currentTown].gold -= targetGold;
            console.log(`${currentTown} plundered! ${targetGold} gold stolen, ${targetPopulation} citizens killed.`);

            if (piratesObj[currentTown].population <= 0 || piratesObj[currentTown].gold <= 0) {
                console.log(`${currentTown} has been wiped off the map!`);
                delete piratesObj[currentTown]
            }
        } else if (nextCommad === 'Prosper') {
            let nextGold = Number(command[2]);
            if (nextGold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                piratesObj[currentTown].gold += nextGold;
                console.log(`${nextGold} gold added to the city treasury. ${currentTown} now has ${piratesObj[currentTown].gold} gold.`);
            }
        }
    }

    let count = Object.keys(piratesObj).length;

    if (count !== 0) {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);

        for (let town in piratesObj) {
            console.log(`${town} -> Population: ${piratesObj[town].population} citizens, Gold: ${piratesObj[town].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]))

// Gold added cannot be a negative number!
// Nassau plundered! 750 gold stolen, 94000 citizens killed.
// Nassau plundered! 150 gold stolen, 1000 citizens killed.
// Nassau has been wiped off the map!
// Campeche plundered! 690 gold stolen, 150000 citizens killed.
// Campeche has been wiped off the map!
// Ahoy, Captain! There are 2 wealthy settlements to go to:
// San Juan -> Population: 930000 citizens, Gold: 1250 kg
// Port Royal -> Population: 420000 citizens, Gold: 3000 kg