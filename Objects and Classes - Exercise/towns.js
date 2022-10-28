function towns(input) {
    let townObj = {};

    for (let town of input) {
        let currentTown = town.split(" | ");
        let townName = currentTown[0];
        let latitude = Number(currentTown[1]);
        let longitude = Number(currentTown[2]);

        townObj.town = townName;
        townObj.latitude = latitude.toFixed(2);
        townObj.longitude = longitude.toFixed(2);

        console.log(townObj);
    }
}
