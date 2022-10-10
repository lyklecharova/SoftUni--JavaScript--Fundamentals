function counterStrike(input) {
    let initialEnergy = Number(input.shift());
    let wonBattles = 0;

    for (let command of input) {
        if (command !== "End of battle") {
            let energy = Number(command);
            if (initialEnergy - energy < 0) {
                console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
                break;
            }
            initialEnergy -= energy;
            wonBattles++;
        } else {
            console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);
        }
        if (wonBattles % 3 === 0) {
            initialEnergy += wonBattles;
        }
    }
}
